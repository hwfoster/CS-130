const tracks = [
  {
    "id":"5ruzrDWcT0vuJIOMW7gMnW",
    "name":"The Adults Are Talking",
    "preview_url":"https://p.scdn.co/mp3-preview/7a97d8a0fc141fe8d187db7526af79297ee3835c?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273bfa99afb5ef0d26d5064b23b"
  },
  {
    "id":"748mdHapucXQri7IAO8yFK",
    "name":"Kiss Me More (feat. SZA)",
    "preview_url":"https://p.scdn.co/mp3-preview/4467817b1adf581526b65d077b5b4354e7007928?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273908280d9807127e185b71d56"
  },
  {
    "id":"6vFsBXYczYsP0H3lgunZOm",
    "name":"Cloud 9",
    "preview_url":"https://p.scdn.co/mp3-preview/94131654b5e570b758ea7fecab1951dfd604ca53?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273d6fd719531afda5f9cc0e248"
  },
  {
    "id":"4LRPiXqCikLlN15c3yImP7",
    "name":"As It Was",
    "preview_url":"https://p.scdn.co/mp3-preview/e9216304e6456a9015ac2054692fd4f0135d8aa9?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
  },
  {
    "id":"45S5WTQEGOB1VHr1Q4FuPl",
    "name":"Golden",
    "preview_url":"https://p.scdn.co/mp3-preview/48af17efb2b52660c5e7a65ae9f050e76179953c?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a"
  },
  {
    "id":"6E3NosMXYlGD21K7KqIxQ1",
    "name":"I Always Knew",
    "preview_url":"https://p.scdn.co/mp3-preview/af6ee3cc9ed0a6fa14120ad5d089e549142ee8a5?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273bf25c435afdd3f63252692f2"
  },
  {
    "id":"0OM9ri37LIbPc9hffwsyb1",
    "name":"Hard To Explain",
    "preview_url":"https://p.scdn.co/mp3-preview/19da4e8b19ceef868c53df7873b07042f6ae28dd?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b27313f2466b83507515291acce4"
  },
  {
    "id":"4dRqYKhLVujxiBXcq50YzG",
    "name":"This Life",
    "preview_url":"https://p.scdn.co/mp3-preview/05f4e7135247c79d45aecedb211e567381da8b15?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273a2b1d3e73c66663c01351bcf"
  },
  {
    "id":"51DZ0wUocQ8sQfjnibXVcD",
    "name":"Unbelievers",
    "preview_url":"https://p.scdn.co/mp3-preview/b0ac9ea1545621fc50e47c56dd2aa7291c534734?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b27363fcc0d5defd6b6da534b002"
  },
  {
    "id":"3Dv1eDb0MEgF93GpLXlucZ",
    "name":"Say So",
    "preview_url":"https://p.scdn.co/mp3-preview/3f681c49542f4a1214b33a065cace7007a307465?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b27382b243023b937fd579a35533"
  },
  {
    "id":"62jc4VA6WPoANaL9Duu8db",
    "name":"Flesh without Blood",
    "preview_url":"https://p.scdn.co/mp3-preview/8abb8830523109588a1725c7007b9f3fbc4b2134?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b2734f1235383b41920e64b00a78"
  },
  {
    "id":"3jHdKaLCkuNEkWcLVmQPCX",
    "name":"BEST INTEREST",
    "preview_url":"https://p.scdn.co/mp3-preview/7ed5aa522210e831a0d99ac0c2551164b905286c?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273ab8995f18dc3dd9f34a6acd4"
  },
  {
    "id":"1zS85RlXiRuTiWpDIOhICA",
    "name":"It's Not My Fault, I'm Happy",
    "preview_url":"https://p.scdn.co/mp3-preview/e67223451f8d5160382546f132f128b3e1c8c45b?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273f860547bc8ba0c59df4fe2c3"
  },
  {
    "id":"1IF5UcqRO42D12vYwceOY6",
    "name":"From the Dining Table",
    "preview_url":"https://p.scdn.co/mp3-preview/ebc0404f8c03222c972b84b3ebb2e0043da739d3?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b2736c619c39c853f8b1d67b7859"
  },
  {
    "id":"3Vi5XqYrmQgOYBajMWSvCi",
    "name":"Need to Know",
    "preview_url":"https://p.scdn.co/mp3-preview/c707247354131537f5d7b0935f38db827711e76c?cid=9697a3a271d24deea38f8b7fbfa0e13c",
    "image_url":"https://i.scdn.co/image/ab67616d0000b2734df3245f26298a1579ecc321",
  }
  ];

// Part 1: 
let t = 0;
for (const track of tracks) {
const template = `
    <div data-index="${t}" onclick="playSong(event);">
        <img src="${track.image_url}" />
        <h2>${track.name}</h2>
    </div>`;
document.querySelector('main').innerHTML += template;
t += 1;
}

// Part 2: 
const playSong = (ev) => {
    const idx = Number(ev.currentTarget.dataset.index);
    document.querySelector("#audio-source").src = tracks[idx].preview_url;
  
    const audio = document.querySelector('audio');
    audio.load();
    audio.play();
}
