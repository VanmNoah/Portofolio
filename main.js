    // Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.left-panel').appendChild(renderer.domElement);
    
    // Create a rotating 3D Torus
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    
    camera.position.z = 30;
    
    function animate() {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();
    
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    // Scroll-based Text Updates
    const sections = document.querySelectorAll('.section');
    const rightPanel = document.querySelector('.right-panel');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight - windowHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop - windowHeight / 2 && scrollY < sectionTop + sectionHeight - windowHeight / 2) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
            }
        });

        // Adjust 3D object based on scroll
        const scrollFraction = scrollY / totalHeight;
        torus.rotation.x = scrollFraction * Math.PI * 2;
        torus.rotation.y = scrollFraction * Math.PI * 2;
    });