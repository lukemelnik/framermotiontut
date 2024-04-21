import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  return (
    <>
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed bottom-0 left-0 w-full h-10 bg-blue-900"
      ></motion.div>
      <div className="max-w-2xl space-y-10 my-32">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beaatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
          quod? Repudiandae repellat nobis aliquam officiis. Quos, impedit cum
          excepturi earum reiciendis, sed voluptatem assumenda perferendis
          nulla, facere minima error deleniti itaque officiis repellendus
          pariatur numquam nesciunt beatae eum. Sint, sed tempore facere modi
          quibusdam sapiente porro. Qui saepe, quod velit suscipit nesciunt
          iusto voluptas! Minus labore pariatur tempora, explicabo consectetur
          nobis aperiam accusamus similique ut fugiat eveniet eaque dicta earum
          totam corporis perspiciatis error repellat, dolorum asperiores? Sunt
          dolores, consequatur voluptas ratione architecto sint a dolor error
          minima, consectetur voluptates, modi repudiandae? A magni explicabo,
          saepe nesciunt ea delectus!
        </p>
      </div>
    </>
  );
}
