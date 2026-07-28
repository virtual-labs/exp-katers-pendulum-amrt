## Theory

<p><strong>Kater’s pendulum</strong>, shown in Fig. 1, is a physical pendulum composed of a metal rod 1.20 m in length, upon which are mounted a sliding metal weight <strong>W<sub>1</sub></strong>, a sliding wooden weight <strong>W<sub>2</sub></strong>, a small sliding metal cylinder <strong>w</strong>, and two sliding knife edges <strong>K<sub>1</sub></strong> and <strong>K<sub>2</sub></strong> that face each other. Each of the sliding objects can be clamped in place on the rod. The pendulum can be suspended and set swinging by resting either knife edge on a flat, level surface. The wooden weight <strong>W<sub>2</sub></strong> is the same size and shape as the metal weight <strong>W<sub>1</sub></strong>. Its function is to provide nearly equal air resistance to swinging in either suspension. This condition is achieved if <strong>W<sub>1</sub></strong> and <strong>W<sub>2</sub></strong>, and separately <strong>K<sub>1</sub></strong> and <strong>K<sub>2</sub></strong>, are placed equidistant from the ends of the metal rod. The centre of mass <strong>G</strong> can be located by balancing the pendulum on an external knife edge. Due to the difference in mass between the metal and wooden weights <strong>W<sub>1</sub></strong> and <strong>W<sub>2</sub></strong>, <strong>G</strong> is not at the center of the rod, and the distances <strong>h<sub>1</sub></strong> and <strong>h<sub>2</sub></strong> from <strong>G</strong> to the suspension points <strong>O<sub>1</sub></strong> and <strong>O<sub>2</sub></strong> at the knife edges <strong>K<sub>1</sub></strong> and <strong>K<sub>2</sub></strong> are not equal. Fine adjustments in the position of <strong>G</strong>, and thus in <strong>h<sub>1</sub></strong> and <strong>h<sub>2</sub></strong>, can be made by moving the small metal cylinder <strong>w</strong>.</p>



  
![kat fig](https://github.com/user-attachments/assets/eeed5e29-f978-4b6c-b0ec-ac59ac4184de)

<p>In Fig. 1, we consider the force of gravity to be acting at <strong>G</strong>. If <strong>h<sub>i</sub></strong> is the distance to <strong>G</strong> from the suspension point <strong>O<sub>i</sub></strong> at the knife edge <strong>K<sub>i</sub></strong>, the equation of motion of the pendulum is:</p>

$$I_i \ddot{\theta} = -Mg h_i \sin\theta$$


where I<sub>i</sub> is the moment of inertia of the pendulum about the suspension point O<sub>i</sub>, and i can be 1 or 2. Comparing to the equation of motion for a simple pendulum 

$$M_i l_i^2 \ddot{\theta} = -Mg l_i \sin\theta$$


we see that the two equations of motion are the same if we take

$$Mg h_i / I_i = g / l_i .............(1)$$



It is convenient to define the radius of gyration of a compound pendulum such that if all its mass M were at a distance from O<sub>i</sub>, the moment of inertia about O<sub>i</sub> would be I<sub>i</sub> , which we do by writing

$$I_i = M k_i^2$$

Inserting this definition into equation (1) shows that

$$k_i^2 = h_i l_i............(2)$$


If I<sub>G</sub> is the moment of inertia of the pendulum about its centre of mass G, we can also define the radius of gyration about the centre of mass by writing  
$$I_G = M k_G^2$$



The parallel axis theorem gives us

$$k_i^2 = h_i^2 + k_G^2$$


so that, using (2), we have

$$l_i = \frac{h_i^2 + k_G^2}{h_i}$$


The period of the pendulum from either suspension point is then

$$T_i = 2\pi \sqrt{\frac{l_i}{g}} = 2\pi \sqrt{\frac{h_i^2 + k_G^2}{g h_i}}.............(3)$$


Squaring (3), one can show that

$$h_1 T_1^2 - h_2 T_2^2 = \frac{4\pi^2}{g}(h_1^2 - h_2^2)$$

and in turn,      

$$\frac{4\pi^2}{g} = \frac{h_1 T_1^2 - h_2 T_2^2}{(h_1 + h_2)(h_1 - h_2)} = \frac{T_1^2 + T_2^2}{2(h_1 + h_2)} + \frac{T_1^2 - T_2^2}{2(h_1 - h_2)}$$


which allows us to calculate g,

$$g = 8\pi^2 \left[ \frac{T_1^2 + T_2^2}{h_1 + h_2} + \frac{T_1^2 - T_2^2}{h_1 - h_2} \right]^{-1}............(4)$$

### Applications

Pendulums are used to regulate pendulum clocks, and are used in scientific instruments such as accelerometers and seismometers. Historically they were used as gravimeters to measure the acceleration of gravity in geophysical surveys, and even as a standard of length. The problem with using pendulums proved to be in measuring their length.

A fine wire suspending a metal sphere approximates a simple pendulum, but the wire changes length, due to the varying tension needed to support the swinging pendulum. In addition, small amounts of angular momentum tend to creep in, and the centre of mass of the sphere can be hard to locate unless the sphere has highly uniform density. With a compound pendulum, there is a point called the centre of oscillation, a distance l from the suspension point along a line through the centre of mass, where l is the length of a simple pendulum with the same period. When suspended from the centre of oscillation, the compound pendulum will have the same period as when suspended from the original suspension point. The centre of oscillation can be located by suspending from various points and measuring the periods, but it is difficult to get an exact match in the period, so again there is uncertainty in the value of l.

With equation (4), derived by Friedrich Bessel in 1826, the situation is improved. h1 + h2, being the distance between the knife edges, can be measured accurately. h1 – h2 is more difficult to measure accurately, because accurate location of the centre of mass G is difficult. However, if T1 and T2 are very nearly equal, the second term in (4) is quite small compared to the first, and h1 – h2 does not have to be known as accurately as h1 + h2.

Kater's pendulum was used as a gravimeter to measure the local acceleration of gravity with greater accuracy than an ordinary pendulum, because it avoids having to measure l. It was popular from its invention in 1817 until the 1950’s, when began to be possible to directly measure the acceleration of gravity during free fall using a Michelson interferometer. Such an absolute gravimeter is not particularly portable, but it can be used to accurately calibrate a relative gravimeter consisting of a mass hanging from a spring adjacent to an accurate length scale. The relative gravimeter can then be carried to any location where it is desired to measure the acceleration of gravity.


