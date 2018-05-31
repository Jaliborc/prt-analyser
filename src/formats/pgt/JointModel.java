package formats.pgt;
import static java.lang.Math.pow;

import java.io.FileInputStream;
import java.io.ObjectInputStream;

import math.Svd;

public class JointModel extends Model {
	public Svd geometry, transfer;
	
	public JointModel(String file) throws Exception {
		ObjectInputStream stream = new ObjectInputStream(new FileInputStream(file));
		
		geometry = new Svd(stream);
		vertices = new Vertex[geometry.height() / 3];
		faces = (int[]) stream.readObject();
		transfer = new Svd(stream);
		
		for (int i = 0; i < vertices.length; i++)
			vertices[i] = new Vertex();
		
		stream.close();
	}
	
	public void render(int pose, int harmonic, int numBands, float[] radiance) {
		int j = (harmonic != 0 ? harmonic - 1 : 0) * 3, i = 0;
		int numHarmonics = numBands * numBands * 3;
		int hiddenHarmonics = numHarmonics() - numHarmonics;
		
		float[] positions = geometry.get(pose);
		float[] colors = transfer.get(pose);
		
		for (Vertex vertex : vertices) {
			vertex.set(positions[i++], positions[i++], positions[i++]);
			vertex.r = 0; vertex.g = 0; vertex.b = 0;
			
			if (harmonic == 0) {
				for (int n = 0; n < numHarmonics;) {
					vertex.r += colors[j++] * radiance[n++];
					vertex.g += colors[j++] * radiance[n++];
					vertex.b += colors[j++] * radiance[n++];
				}
			
				j += hiddenHarmonics;
			} else {
				float color = colors[j];
				vertex.r = -color;
				vertex.b = color;
				
				j += numHarmonics();
			}
		}
	}
	
	public int numPoses() {
		return geometry.width();
	}
	
	public int numBands() {
		return (int) pow(numHarmonics() / 3, .5);
	}
	
	public int numHarmonics() {
		return transfer.height() / vertices.length;
	}
}
