uniform mat4 light[3];

const vec4 zonal = vec4(
    0.1591549430918953357688837633725143620344596457404564,
    0.3257350079352799477242564152255646697172570721294851,
    0.2731371076480197676358464264506721006726082398760647,
    0.0788478913131300015077234225739276233310618767621028
);

varying mat4 v;
varying vec3 n;

mat4 shProduct(mat4 f, mat4 g) {
    float tf,tg,t;
    mat4 y;
    
   // [0,0]: 0,
    y[0].x  = (0.282094792935999980)*f[0].x*g[0].x;

    // [1,1]: 0,6,8,
    tf = (0.282094791773000010)*f[0].x+(-0.126156626101000010)*f[1].z+(-0.218509686119999990)*f[2].x;
    tg = (0.282094791773000010)*g[0].x+(-0.126156626101000010)*g[1].z+(-0.218509686119999990)*g[2].x;
    y[0].y  = tf*g[0].y+tg*f[0].y;
    t = f[0].y*g[0].y;
    y[0].x += (0.282094791773000010)*t;
    y[1].z  = (-0.126156626101000010)*t;
    y[2].x  = (-0.218509686119999990)*t;
    
    // [1,4]: 3,13,15,
    tf = (0.218509686114999990)*f[0].w+(-0.058399170082300000)*f[3].y+(-0.226179013157999990)*f[3].w;
    tg = (0.218509686114999990)*g[0].w+(-0.058399170082300000)*g[3].y+(-0.226179013157999990)*g[3].w;
    y[0].y += tf*g[1].x+tg*f[1].x;
    y[1].x  = tf*g[0].y+tg*f[0].y;
    t = f[0].y*g[1].x+f[1].x*g[0].y;
    y[0].w  = (0.218509686114999990)*t;
    y[3].y  = (-0.058399170082300000)*t;
    y[3].w  = (-0.226179013157999990)*t;
    
    // [1,5]: 2,12,14,
    tf = (0.218509686118000010)*f[0].z+(-0.143048168103000000)*f[3].x+(-0.184674390923000000)*f[3].z;
    tg = (0.218509686118000010)*g[0].z+(-0.143048168103000000)*g[3].x+(-0.184674390923000000)*g[3].z;
    y[0].y += tf*g[1].y+tg*f[1].y;
    y[1].y  = tf*g[0].y+tg*f[0].y;
    t = f[0].y*g[1].y+f[1].y*g[0].y;
    y[0].z  = (0.218509686118000010)*t;
    y[3].x  = (-0.143048168103000000)*t;
    y[3].z  = (-0.184674390923000000)*t;
    
    // [1,6]: 11,
    tf = (0.202300659402999990)*f[2].w;
    tg = (0.202300659402999990)*g[2].w;
    y[0].y += tf*g[1].z+tg*f[1].z;
    y[1].z += tf*g[0].y+tg*f[0].y;
    t = f[0].y*g[1].z+f[1].z*g[0].y;
    y[2].w  = (0.202300659402999990)*t;
    
    // [1,8]: 9,11,
    tf = (0.226179013155000000)*f[2].y+(0.058399170081799998)*f[2].w;
    tg = (0.226179013155000000)*g[2].y+(0.058399170081799998)*g[2].w;
    y[0].y += tf*g[2].x+tg*f[2].x;
    y[2].x += tf*g[0].y+tg*f[0].y;
    t = f[0].y*g[2].x+f[2].x*g[0].y;
    y[2].y  = (0.226179013155000000)*t;
    y[2].w += (0.058399170081799998)*t;
    
    // [2,2]: 0,6,
    tf = (0.282094795249000000)*f[0].x+(0.252313259986999990)*f[1].z;
    tg = (0.282094795249000000)*g[0].x+(0.252313259986999990)*g[1].z;
    y[0].z += tf*g[0].z+tg*f[0].z;
    t = f[0].z*g[0].z;
    y[0].x += (0.282094795249000000)*t;
    y[1].z += (0.252313259986999990)*t;
    
    // [2,6]: 12,
    tf = (0.247766706973999990)*f[3].x;
    tg = (0.247766706973999990)*g[3].x;
    y[0].z += tf*g[1].z+tg*f[1].z;
    y[1].z += tf*g[0].z+tg*f[0].z;
    t = f[0].z*g[1].z+f[1].z*g[0].z;
    y[3].x += (0.247766706973999990)*t;
    
    // [3,3]: 0,6,8,
    tf = (0.282094791773000010)*f[0].x+(-0.126156626101000010)*f[1].z+(0.218509686119999990)*f[2].x;
    tg = (0.282094791773000010)*g[0].x+(-0.126156626101000010)*g[1].z+(0.218509686119999990)*g[2].x;
    y[0].w += tf*g[0].w+tg*f[0].w;
    t = f[0].w*g[0].w;
    y[0].x += (0.282094791773000010)*t;
    y[1].z += (-0.126156626101000010)*t;
    y[2].x += (0.218509686119999990)*t;
    
    // [3,6]: 13,
    tf = (0.202300659402999990)*f[3].y;
    tg = (0.202300659402999990)*g[3].y;
    y[0].w += tf*g[1].z+tg*f[1].z;
    y[1].z += tf*g[0].w+tg*f[0].w;
    t = f[0].w*g[1].z+f[1].z*g[0].w;
    y[3].y += (0.202300659402999990)*t;
    
    // [3,7]: 2,12,14,
    tf = (0.218509686118000010)*f[0].z+(-0.143048168103000000)*f[3].x+(0.184674390923000000)*f[3].z;
    tg = (0.218509686118000010)*g[0].z+(-0.143048168103000000)*g[3].x+(0.184674390923000000)*g[3].z;
    y[0].w += tf*g[1].w+tg*f[1].w;
    y[1].w  = tf*g[0].w+tg*f[0].w;
    t = f[0].w*g[1].w+f[1].w*g[0].w;
    y[0].z += (0.218509686118000010)*t;
    y[3].x += (-0.143048168103000000)*t;
    y[3].z += (0.184674390923000000)*t;

    // [3,8]: 13,15,
    tf = (-0.058399170081799998)*f[3].y+(0.226179013155000000)*f[3].w;
    tg = (-0.058399170081799998)*g[3].y+(0.226179013155000000)*g[3].w;
    y[0].w += tf*g[2].x+tg*f[2].x;
    y[2].x += tf*g[0].w+tg*f[0].w;
    t = f[0].w*g[2].x+f[2].x*g[0].w;
    y[3].y += (-0.058399170081799998)*t;
    y[3].w += (0.226179013155000000)*t;

    // [4,4]: 0,6,
    tf = (0.282094791770000020)*f[0].x+(-0.180223751576000010)*f[1].z;
    tg = (0.282094791770000020)*g[0].x+(-0.180223751576000010)*g[1].z;
    y[1].x += tf*g[1].x+tg*f[1].x;
    t = f[1].x*g[1].x;
    y[0].x += (0.282094791770000020)*t;
    y[1].z += (-0.180223751576000010)*t;

    // [4,5]: 7,
    tf = (0.156078347226000000)*f[1].w;
    tg = (0.156078347226000000)*g[1].w;
    y[1].x += tf*g[1].y+tg*f[1].y;
    y[1].y += tf*g[1].x+tg*f[1].x;
    t = f[1].x*g[1].y+f[1].y*g[1].x;
    y[1].w += (0.156078347226000000)*t;

    // [4,9]: 3,13,
    tf = (0.226179013157999990)*f[0].w+(-0.094031597258400004)*f[3].y;
    tg = (0.226179013157999990)*g[0].w+(-0.094031597258400004)*g[3].y;
    y[1].x += tf*g[2].y+tg*f[2].y;
    y[2].y += tf*g[1].x+tg*f[1].x;
    t = f[1].x*g[2].y+f[2].y*g[1].x;
    y[0].w += (0.226179013157999990)*t;
    y[3].y += (-0.094031597258400004)*t;

    // [4,10]: 2,12,
    tf = (0.184674390919999990)*f[0].z+(-0.188063194517999990)*f[3].x;
    tg = (0.184674390919999990)*g[0].z+(-0.188063194517999990)*g[3].x;
    y[1].x += tf*g[2].z+tg*f[2].z;
    y[2].z  = tf*g[1].x+tg*f[1].x;
    t = f[1].x*g[2].z+f[2].z*g[1].x;
    y[0].z += (0.184674390919999990)*t;
    y[3].x += (-0.188063194517999990)*t;

    // [4,11]: 3,13,15,
    tf = (-0.058399170082300000)*f[0].w+(0.145673124078000010)*f[3].y+(0.094031597258400004)*f[3].w;
    tg = (-0.058399170082300000)*g[0].w+(0.145673124078000010)*g[3].y+(0.094031597258400004)*g[3].w;
    y[1].x += tf*g[2].w+tg*f[2].w;
    y[2].w += tf*g[1].x+tg*f[1].x;
    t = f[1].x*g[2].w+f[2].w*g[1].x;
    y[0].w += (-0.058399170082300000)*t;
    y[3].y += (0.145673124078000010)*t;
    y[3].w += (0.094031597258400004)*t;

    // [5,5]: 0,6,8,
    tf = (0.282094791773999990)*f[0].x+(0.090111875786499998)*f[1].z+(-0.156078347227999990)*f[2].x;
    tg = (0.282094791773999990)*g[0].x+(0.090111875786499998)*g[1].z+(-0.156078347227999990)*g[2].x;
    y[1].y += tf*g[1].y+tg*f[1].y;
    t = f[1].y*g[1].y;
    y[0].x += (0.282094791773999990)*t;
    y[1].z += (0.090111875786499998)*t;
    y[2].x += (-0.156078347227999990)*t;

    // [5,9]: 14,
    tf = (0.148677009677999990)*f[3].z;
    tg = (0.148677009677999990)*g[3].z;
    y[1].y += tf*g[2].y+tg*f[2].y;
    y[2].y += tf*g[1].y+tg*f[1].y;
    t = f[1].y*g[2].y+f[2].y*g[1].y;
    y[3].z += (0.148677009677999990)*t;

    // [5,10]: 3,13,15,
    tf = (0.184674390919999990)*f[0].w+(0.115164716490000000)*f[3].y+(-0.148677009678999990)*f[3].w;
    tg = (0.184674390919999990)*g[0].w+(0.115164716490000000)*g[3].y+(-0.148677009678999990)*g[3].w;
    y[1].y += tf*g[2].z+tg*f[2].z;
    y[2].z += tf*g[1].y+tg*f[1].y;
    t = f[1].y*g[2].z+f[2].z*g[1].y;
    y[0].w += (0.184674390919999990)*t;
    y[3].y += (0.115164716490000000)*t;
    y[3].w += (-0.148677009678999990)*t;

    // [5,11]: 2,12,14,
    tf = (0.233596680327000010)*f[0].z+(0.059470803871800003)*f[3].x+(-0.115164716491000000)*f[3].z;
    tg = (0.233596680327000010)*g[0].z+(0.059470803871800003)*g[3].x+(-0.115164716491000000)*g[3].z;
    y[1].y += tf*g[2].w+tg*f[2].w;
    y[2].w += tf*g[1].y+tg*f[1].y;
    t = f[1].y*g[2].w+f[2].w*g[1].y;
    y[0].z += (0.233596680327000010)*t;
    y[3].x += (0.059470803871800003)*t;
    y[3].z += (-0.115164716491000000)*t;

    // [6,6]: 0,6,
    tf = (0.282094797560000000)*f[0].x;
    tg = (0.282094797560000000)*g[0].x;
    y[1].z += tf*g[1].z+tg*f[1].z;
    t = f[1].z*g[1].z;
    y[0].x += (0.282094797560000000)*t;
    y[1].z += (0.180223764527000010)*t;

    // [7,7]: 0,6,8,
    tf = (0.282094791773999990)*f[0].x+(0.090111875786499998)*f[1].z+(0.156078347227999990)*f[2].x;
    tg = (0.282094791773999990)*g[0].x+(0.090111875786499998)*g[1].z+(0.156078347227999990)*g[2].x;
    y[1].w += tf*g[1].w+tg*f[1].w;
    t = f[1].w*g[1].w;
    y[0].x += (0.282094791773999990)*t;
    y[1].z += (0.090111875786499998)*t;
    y[2].x += (0.156078347227999990)*t;

    // [7,10]: 1,9,11,
    tf = (0.184674390919999990)*f[0].y+(0.148677009678999990)*f[2].y+(0.115164716490000000)*f[2].w;
    tg = (0.184674390919999990)*g[0].y+(0.148677009678999990)*g[2].y+(0.115164716490000000)*g[2].w;
    y[1].w += tf*g[2].z+tg*f[2].z;
    y[2].z += tf*g[1].w+tg*f[1].w;
    t = f[1].w*g[2].z+f[2].z*g[1].w;
    y[0].y += (0.184674390919999990)*t;
    y[2].y += (0.148677009678999990)*t;
    y[2].w += (0.115164716490000000)*t;

    // [7,13]: 2,12,14,
    tf = (0.233596680327000010)*f[0].z+(0.059470803871800003)*f[3].x+(0.115164716491000000)*f[3].z;
    tg = (0.233596680327000010)*g[0].z+(0.059470803871800003)*g[3].x+(0.115164716491000000)*g[3].z;
    y[1].w += tf*g[3].y+tg*f[3].y;
    y[3].y += tf*g[1].w+tg*f[1].w;
    t = f[1].w*g[3].y+f[3].y*g[1].w;
    y[0].z += (0.233596680327000010)*t;
    y[3].x += (0.059470803871800003)*t;
    y[3].z += (0.115164716491000000)*t;

    // [7,14]: 15,
    tf = (0.148677009677999990)*f[3].w;
    tg = (0.148677009677999990)*g[3].w;
    y[1].w += tf*g[3].z+tg*f[3].z;
    y[3].z += tf*g[1].w+tg*f[1].w;
    t = f[1].w*g[3].z+f[3].z*g[1].w;
    y[3].w += (0.148677009677999990)*t;

    // [8,8]: 0,6,
    tf = (0.282094791770000020)*f[0].x+(-0.180223751576000010)*f[1].z;
    tg = (0.282094791770000020)*g[0].x+(-0.180223751576000010)*g[1].z;
    y[2].x += tf*g[2].x+tg*f[2].x;
    t = f[2].x*g[2].x;
    y[0].x += (0.282094791770000020)*t;
    y[1].z += (-0.180223751576000010)*t;

    // [8,9]: 11,
    tf = (-0.094031597259499999)*f[2].w;
    tg = (-0.094031597259499999)*g[2].w;
    y[2].x += tf*g[2].y+tg*f[2].y;
    y[2].y += tf*g[2].x+tg*f[2].x;
    t = f[2].x*g[2].y+f[2].y*g[2].x;
    y[2].w += (-0.094031597259499999)*t;

    // [8,13]: 15,
    tf = (-0.094031597259499999)*f[3].w;
    tg = (-0.094031597259499999)*g[3].w;
    y[2].x += tf*g[3].y+tg*f[3].y;
    y[3].y += tf*g[2].x+tg*f[2].x;
    t = f[2].x*g[3].y+f[3].y*g[2].x;
    y[3].w += (-0.094031597259499999)*t;

    // [8,14]: 2,12,
    tf = (0.184674390919999990)*f[0].z+(-0.188063194517999990)*f[3].x;
    tg = (0.184674390919999990)*g[0].z+(-0.188063194517999990)*g[3].x;
    y[2].x += tf*g[3].z+tg*f[3].z;
    y[3].z += tf*g[2].x+tg*f[2].x;
    t = f[2].x*g[3].z+f[3].z*g[2].x;
    y[0].z += (0.184674390919999990)*t;
    y[3].x += (-0.188063194517999990)*t;

    // [9,9]: 0,6,
    tf = (0.282094791766999970)*f[0].x+(-0.210261043508000010)*f[1].z;
    tg = (0.282094791766999970)*g[0].x+(-0.210261043508000010)*g[1].z;
    y[2].y += tf*g[2].y+tg*f[2].y;
    t = f[2].y*g[2].y;
    y[0].x += (0.282094791766999970)*t;
    y[1].z += (-0.210261043508000010)*t;

    // [10,10]: 0,
    tf = (0.282094791771999980)*f[0].x;
    tg = (0.282094791771999980)*g[0].x;
    y[2].z += tf*g[2].z+tg*f[2].z;
    t = f[2].z*g[2].z;
    y[0].x += (0.282094791771999980)*t;

    // [11,11]: 0,6,8,
    tf = (0.282094791773999990)*f[0].x+(0.126156626101000010)*f[1].z+(-0.145673124078999990)*f[2].x;
    tg = (0.282094791773999990)*g[0].x+(0.126156626101000010)*g[1].z+(-0.145673124078999990)*g[2].x;
    y[2].w += tf*g[2].w+tg*f[2].w;
    t = f[2].w*g[2].w;
    y[0].x += (0.282094791773999990)*t;
    y[1].z += (0.126156626101000010)*t;
    y[2].x += (-0.145673124078999990)*t;

    // [12,12]: 0,6,
    tf = (0.282094799871999980)*f[0].x+(0.168208852954000010)*f[1].z;
    tg = (0.282094799871999980)*g[0].x+(0.168208852954000010)*g[1].z;
    y[3].x += tf*g[3].x+tg*f[3].x;
    t = f[3].x*g[3].x;
    y[0].x += (0.282094799871999980)*t;
    y[1].z += (0.168208852954000010)*t;

    // [13,13]: 0,6,8,
    tf = (0.282094791773999990)*f[0].x+(0.126156626101000010)*f[1].z+(0.145673124078999990)*f[2].x;
    tg = (0.282094791773999990)*g[0].x+(0.126156626101000010)*g[1].z+(0.145673124078999990)*g[2].x;
    y[3].y += tf*g[3].y+tg*f[3].y;
    t = f[3].y*g[3].y;
    y[0].x += (0.282094791773999990)*t;
    y[1].z += (0.126156626101000010)*t;
    y[2].x += (0.145673124078999990)*t;

    // [14,14]: 0,
    tf = (0.282094791771999980)*f[0].x;
    tg = (0.282094791771999980)*g[0].x;
    y[3].z += tf*g[3].z+tg*f[3].z;
    t = f[3].z*g[3].z;
    y[0].x += (0.282094791771999980)*t;

    // [15,15]: 0,6,
    tf = (0.282094791766999970)*f[0].x+(-0.210261043508000010)*f[1].z;
    tg = (0.282094791766999970)*g[0].x+(-0.210261043508000010)*g[1].z;
    y[3].w += tf*g[3].w+tg*f[3].w;
    t = f[3].w*g[3].w;
    y[0].x += (0.282094791766999970)*t;
    y[1].z += (-0.210261043508000010)*t;
    
    return y;
}

mat4 shPolynomials(vec3 n) {
    mat4 f;
    
    f[0][0] = zonal[0];
    
    f[0][1] = -zonal[1] * n.y;
    f[0][2] = zonal[1] * n.z;
    f[0][3] = -zonal[1] * n.x;
    
    f[1][0] = zonal[2] * n.y * n.x;
    f[1][1] = -zonal[2] * n.y * n.z;
    f[1][2] = zonal[3] * (3.0 * n.z*n.z - 1.0);
    f[1][3] = -zonal[2] * n.x * n.z;
    f[2][0] = zonal[2]/2.0 * (n.x*n.x - n.y*n.y);
    
    f[2].yzw = vec3(0, 0, 0);
    f[3] = vec4(0, 0, 0, 0);
    
    return f;
}

float matrixDot(mat4 a, mat4 b) {
    return dot(a[0], b[0]) + dot(a[1], b[1]) + dot(a[2], b[2]) + dot(a[3], b[3]);
}

void main() {
    mat4 transfer = shProduct(shPolynomials(n), v);
    vec3 color = vec3(
        matrixDot(transfer, light[0]),
        matrixDot(transfer, light[1]),
        matrixDot(transfer, light[2])
    );

    gl_FragColor = vec4(color, 1);
}