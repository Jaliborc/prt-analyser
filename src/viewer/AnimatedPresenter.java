package viewer;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

import mintools.parameters.BooleanParameter;
import mintools.parameters.IntParameter;

import org.lwjgl.opengl.Drawable;

import graphics.FileSelector;
import graphics.Presenter;

class AnimatedPresenter extends Presenter {
	public void startup(final Drawable drawable) throws Exception {
		scene = new Scene("../Ambients/Museum.tga");
		loop = new BooleanParameter("Loop", false);
		drawScene = new BooleanParameter("Draw Scene", true);
		pose =  new IntParameter("Pose", 0, 0, numPoses - 1);
		
		new Timer().schedule(new TimerTask() {
			public void run() {
				if (loop.getValue())
					pose.setValue((pose.getValue() + 1) % numPoses);
				
				render(pose.getValue());
				
		}}, new Date(), 33);
		
		add(new FileSelector("Scene", "../Ambients/", "tga", "png") {
			protected void selected(String file) throws Exception {
				sceneFile = file;
		}});
		
		add(loop.getControls());
		add(drawScene.getControls());
		add(pose.getSliderControls());
	}
	
	public void render(int pose) {}
	public void draw() throws Exception {
		if (sceneFile != null) {
			scene = new Scene(sceneFile);
			sceneFile = null;
		}
		
		if (drawScene.getValue())
			scene.draw();
	}
	
	Scene scene;
	BooleanParameter loop, drawScene;
	IntParameter pose;
	String sceneFile = null;
	int numPoses;
}
