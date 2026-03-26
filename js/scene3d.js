/* ========================================
   THREE.JS - SCÈNE 3D INTERACTIVE
   ======================================== */

(function() {
    'use strict';

    // Variables de scène
    let scene, camera, renderer, mesh, videoTexture;
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    // Configuration
    const canvas = document.getElementById('canvas-3d');
    if (!canvas) return;

    /* ========================================
       INITIALISATION
       ======================================== */

    function init() {
        // Créer la scène
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);
        scene.fog = new THREE.Fog(0x0a0a0a, 10, 50);

        // Configuration caméra
        const aspect = canvas.clientWidth / canvas.clientHeight;
        camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: false
        });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Créer la vidéo texture
        createVideoTexture();

        // Créer les objets 3D
        createObjects();

        // Lumières
        createLights();

        // Event listeners
        window.addEventListener('resize', onWindowResize);
        canvas.addEventListener('mousemove', onMouseMove);

        // Démarrer l'animation
        animate();
    }

    /* ========================================
       VIDÉO TEXTURE
       ======================================== */

    function createVideoTexture() {
        const video = document.createElement('video');
        video.src = 'Images/kling_20260325_作品_Smooth_cin_5179_0.mp4';
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        // Essayer de lancer la vidéo
        video.play().catch(error => {
            console.log('Autoplay vidéo bloqué:', error);
        });

        // Créer la texture depuis la vidéo
        videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.format = THREE.RGBFormat;
    }

    /* ========================================
       CRÉATION DES OBJETS 3D
       ======================================== */

    function createObjects() {
        // Groupe principal
        const group = new THREE.Group();

        // 1. TORUS avec vidéo texture
        const torusGeometry = new THREE.TorusGeometry(1.5, 0.5, 32, 100);
        const torusMaterial = new THREE.MeshStandardMaterial({
            map: videoTexture,
            metalness: 0.3,
            roughness: 0.4,
            emissive: new THREE.Color(0x00fff5),
            emissiveIntensity: 0.2
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.set(0, 0, 0);
        torus.castShadow = true;
        torus.receiveShadow = true;
        group.add(torus);

        // 2. SPHÈRE avec matériau holographique
        const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
        const sphereMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x00fff5,
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.7,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(3, 1, -2);
        sphere.castShadow = true;
        group.add(sphere);

        // 3. CUBE wireframe
        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const boxMaterial = new THREE.MeshBasicMaterial({
            color: 0xff006e,
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        box.position.set(-3, -1, -1);
        group.add(box);

        // 4. ICOSAÈDRE
        const icoGeometry = new THREE.IcosahedronGeometry(0.6, 0);
        const icoMaterial = new THREE.MeshStandardMaterial({
            color: 0x7b2cbf,
            metalness: 0.8,
            roughness: 0.2,
            emissive: new THREE.Color(0x7b2cbf),
            emissiveIntensity: 0.3
        });
        const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
        icosahedron.position.set(2, -2, 1);
        icosahedron.castShadow = true;
        group.add(icosahedron);

        // 5. PLAN au sol avec vidéo
        const planeGeometry = new THREE.PlaneGeometry(10, 10);
        const planeMaterial = new THREE.MeshStandardMaterial({
            map: videoTexture,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.3,
            metalness: 0.5,
            roughness: 0.7
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -3;
        plane.receiveShadow = true;
        group.add(plane);

        // 6. Particules
        createParticles(group);

        // Ajouter le groupe à la scène
        scene.add(group);
        mesh = group;
    }

    /* ========================================
       PARTICULES
       ======================================== */

    function createParticles(group) {
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 20;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x00fff5,
            size: 0.02,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        group.add(particles);
    }

    /* ========================================
       LUMIÈRES
       ======================================== */

    function createLights() {
        // Lumière ambiante
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        // Lumière directionnelle principale
        const directionalLight = new THREE.DirectionalLight(0x00fff5, 0.8);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        scene.add(directionalLight);

        // Lumière point cyan
        const pointLight1 = new THREE.PointLight(0x00fff5, 1, 10);
        pointLight1.position.set(-5, 3, 2);
        scene.add(pointLight1);

        // Lumière point magenta
        const pointLight2 = new THREE.PointLight(0xff006e, 1, 10);
        pointLight2.position.set(5, -3, -2);
        scene.add(pointLight2);

        // Lumière spot
        const spotLight = new THREE.SpotLight(0xffffff, 0.5);
        spotLight.position.set(0, 10, 0);
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 0.2;
        spotLight.castShadow = true;
        scene.add(spotLight);
    }

    /* ========================================
       GESTION SOURIS
       ======================================== */

    function onMouseMove(event) {
        const rect = canvas.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / canvas.clientWidth) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / canvas.clientHeight) * 2 + 1;

        // Mettre à jour les infos UI
        if (window.updateCanvasInfo) {
            const rotation = (mesh.rotation.y * 180 / Math.PI) % 360;
            window.updateCanvasInfo(mouseX, mouseY, rotation);
        }
    }

    /* ========================================
       RESPONSIVE
       ======================================== */

    function onWindowResize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    /* ========================================
       ANIMATION
       ======================================== */

    function animate() {
        requestAnimationFrame(animate);

        if (!mesh) return;

        // Rotation automatique du groupe
        mesh.rotation.y += 0.002;

        // Suivre la souris (smooth)
        targetX = mouseX * 0.3;
        targetY = mouseY * 0.3;

        mesh.rotation.x += 0.05 * (targetY - mesh.rotation.x);
        mesh.rotation.y += 0.05 * (targetX - mesh.rotation.y + mesh.rotation.y % (Math.PI * 2));

        // Animation des objets individuels
        mesh.children.forEach((child, index) => {
            if (child.isMesh && !child.geometry.type.includes('Plane')) {
                // Rotation individuelle
                child.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1);
                child.rotation.z += 0.005 * (index % 2 === 0 ? -1 : 1);

                // Mouvement de flottement
                child.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
            }
        });

        // Animation des particules
        const particles = mesh.children.find(child => child.isPoints);
        if (particles) {
            particles.rotation.y += 0.0005;
            particles.rotation.x += 0.0002;
        }

        // Render
        renderer.render(scene, camera);
    }

    /* ========================================
       LANCER L'INITIALISATION
       ======================================== */

    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Post-processing optionnel (bloom effect)
    // Peut être ajouté avec THREE.EffectComposer si nécessaire

})();
