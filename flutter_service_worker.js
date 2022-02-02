'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "02a893997a07131f0678d20ea95abec1",
"index.html": "de3b306de0e36b77987bc8dc940c0e0a",
"/": "de3b306de0e36b77987bc8dc940c0e0a",
"main.dart.js": "5e0c0a7df90b33f3521c62031c002c89",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "d04759894330cf503a2f3918790a614d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "509385dd204d94a15ea0efd10326ece7",
".git/config": "e3ba41000b0b1cf7c052c4e02178c177",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/95/6b9dda8e6fca348d162120c1dfb1dd51becf06": "5c3f8d05c44efba86e99dc731101651d",
".git/objects/95/eae8b11cc0df701f224f3acbfd2bcf37a4a0aa": "73b7f4c2aad4550c7cff0f77b23ed6e5",
".git/objects/92/8f02aa166b6015abb568ef36a34fdba68546cb": "5a3efe7c7e30e1af6f24633055606fac",
".git/objects/3e/380c1b1cb0f2e2d09be7673410b13a4dcbac2f": "b350879c69175179b769e03ed6f230c5",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/68/1ed4e5251f11f58736c0d5689132609f9b12de": "c8d5a7c0a129a289eac77d098af0a67c",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "9c7ac2161ab4d41eb72995f10abe8780",
".git/objects/57/65f204834be5cdd43ba161760f7a7f3ed3bae6": "0819424b5162828b797cb8969f76b7d5",
".git/objects/3b/3d3f2839f0cda47392d10cdccc3654758800e4": "a652e597e95a9a6e0e9627d77dceb8d4",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "5b5c9018f1dfdb38059bfcce4201101e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "352867978a346c506bb3faab4ed092f0",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "e2a5d81b824d6091d76bb5ecb8bf8a01",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "dddca3f1373f3dc9a3da1c1e3b0991bc",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "084552050b88db0ff0ae360d079fda47",
".git/objects/3d/f95219942d6b78bb4e3a8da6e1cea3cf600756": "06199e73aad0f21934c4540bf50acbc3",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "a5e8f00ff831d20b1d1a621da8adbf77",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "5cdc58f38828d85faf60d344448cff42",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/93/2c693cf02b670dda9ed6164118dca56ddce9a8": "b5f8d9c37e6bcbfdde6508c69f3c3db9",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "c55944bf24a6795a30f3c6aacdba9f96",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "66248eba29ca49c80c20042653b5c7ab",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "0f19ae5f7d21b347fea6f70dc942a7c1",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "322d3378d5c61d470e3cddea51613ea6",
".git/objects/05/cb5ed19199dd50d7e47808bae558b8764c201e": "9938ff7e5d34acd90d1247fce94677c8",
".git/objects/05/2f5d5f07b5209f9b546cccee156c41ececc29a": "7dcb182b750a0498c1955d8ede4205da",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "d916aa57365e51a09961834873e08f50",
".git/objects/b2/46c607e8b879f228f5181be949cb46f699e556": "ad5af06a3bd27643dc2bef7c22012341",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "8743e406ba04f7d2151b690cfec2c95f",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "cfe3b583f7e38cb1e1908e784b194d08",
".git/objects/bb/9bbf9724ebf0c555bc84b166930adffddeee97": "cc7a4be56f13783f89c52d0d0081e014",
".git/objects/be/d5b2b7c7a88ff8590cb229b8814f1dbf575544": "a396dc987e644c69b80fef574ae22103",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b4/6b49bb54f33bd777a6c9760f830b16ea64614c": "89f823940d96523ea589210eda38def6",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "e34b4caa5ea51515c4c71c9d665fe2ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/bc/e86e951899d69d602ee99ab1fc2d2ae5f6ced9": "663ec2451a7736fea1613c8b7f8940f5",
".git/objects/ae/5facb851378c73fea592bc5404033524a76df1": "b6fdc67a8916b02071e321371987fece",
".git/objects/ae/3b368f931d04bbf73e5fb4647a53eee9958849": "4f38cf78ca81d450c4a76af3974c626f",
".git/objects/d8/22e6e097501e5810fc94c351ee98d21c22be3f": "d97f5a2da0cf2c1346e90d6e047d0a9f",
".git/objects/ab/141c0fc52a6e3c2d13d18260c8295e011adda2": "938257cd2f860965eee363a99d1d639f",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "f8f12c5200a0b4fb7338a3d0c2ffc8d2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/e5/20607cd506596d81442b4b07f150894ae3ecd8": "82eaad09492cac3ddd2d1bc0816508e0",
".git/objects/e2/d51301a9e0044d0f85d859d08a78d2aeb9d6d7": "e4efa8e382c6d49d7c5714c7c4147c6f",
".git/objects/f4/7d9eabb0d64edfa2f7ebc2010674ffb943b9dd": "0d2195df357ca010c962138c4828266a",
".git/objects/f3/173aa812f21416c4bd2442ea695fbdeadcffa4": "eb3ffc57c5dc46fef4d0ff21554808d2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c9/d9bbdc27105169170af5f8359b35fe61a51234": "ffe8028fb1fec9e28272bca6de3e6e2a",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "273e5ca6396c51487ce55f7c6a2a9e63",
".git/objects/fd/320b5f2f356ecac218f4d47f07f893b2f54283": "84b245ff03ff49f97adb5f1cd99bb27a",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "f6fabc869eee80019d28bbabaae80f90",
".git/objects/cf/3c7fbbc573d0d4aaae3d231f704868e25ce29e": "67230b79845ff4dfc2c957cd55c77765",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "37cff1f68cb5f0ab3e9ab2ce84cd3494",
".git/objects/ca/3e3ceca126a113d8cf0f4d017eb7b0c3c3f7db": "d09db815aaba57cfaba24b77992c455e",
".git/objects/ca/818eca5c4c9b20b2f6e1254ee17eecaff226b3": "fa28b44c019cb9fa3ad7344e33581458",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "3c4126b3f3755a668f137ee0f09f5974",
".git/objects/e4/eb835ed1a968b5e855be70c456c7ed61ec0ffb": "464850f6d5d55149258dc537c8a50c9a",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "280987912854696948ef86e19e684130",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/c1/bc25ad08b4b0112aba366f2549b310339b8522": "b1b97bc2cdf791a665d743778bf0bd72",
".git/objects/c1/b8b8edef77e53e52dbab8d1cc2a9cde062b19d": "6f21a15a7d86b0db475109cc1c3be2e0",
".git/objects/c6/01f1fefe80681a7542b5c7e738b7f6cd8974bc": "8c12f3ca480187f8e1f523fd571b6c84",
".git/objects/4e/5c6bcce5d20fef7ea4b4ecda88d75c51c2a2cd": "929184bcf2bd3abb27a897b5f75d76c5",
".git/objects/4e/dab12ea6bfc20c83394e33fcab85647416886d": "fd8c1ed5260733b7ff124eef6c2acf24",
".git/objects/20/29d7ffceafb39f0c8220bb344c98b4b211cc26": "48d4c69074c30ce7a745546e7f40b8bd",
".git/objects/18/91b35d6b3b127f35a7741295cf6621b34943d2": "44927d1739279f6c4ec78ea7a4dff5cc",
".git/objects/27/2d28c16ca5d3a48ce3dd9eecf5556342a921c9": "869e7b654926b88d773068a780a60786",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "b3781133604d26e4cdb145dcc68d0ac2",
".git/objects/7c/fa79e78da00787729517b093943ce30eb5bb8e": "240a65a7c7f05cc9fdb72e6674bf6ec1",
".git/objects/7c/00e57b677fbc3979b91522ca35016d29ddd5f7": "8f2f6efdb004853ab040b8ce29e99fb4",
".git/objects/1f/3d2c1b6e944b158b5285044db4ac843a6eaebb": "a6803703fce8ed8a5ceabb33adf553b1",
".git/objects/80/35d0ebefbdca213b716d44b8352634b5a48a1d": "4b5f9dd170e86565c2db87674a9cf496",
".git/objects/28/01cd3cafffbe7a823a21352a9858512fc6ce83": "ece7db5cc7fea9b3a314d5217800d291",
".git/objects/17/72d2471604205458da281237e0435dd918112d": "8b776392807d6f7be8936e6ed42e69ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "87a2ff7f600b6daec33558e039bc32c8",
".git/objects/7e/2a5aee47f32aaec68d2e941fb5742e2a08efd2": "78deacdfe07de61465f36f1df529162b",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "f445a8d7f5b6b7254fecf559a1bff7fb",
".git/objects/26/227067929f8edbf093a12bdaca82e266100492": "98e8c2ff89ecb2c603cd60507a58011b",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "c935fae1897001c51853fb7f4a30bd5f",
".git/objects/2a/8006e5170a6a109a0f53df520e5164aa68f049": "5897ed81482b7331e64732f1b1631356",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "8cd7e9ca99016151fd67939031fb3bfd",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "a27e17eede6aa4c7d8e68508f569a2f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/1c6d82f6c79bd5bf9304fe8c1e66cbb5172ee0": "eab56d1623088c542d20c9e444c48595",
".git/objects/6b/fdac2a5ce413e3371dc77cfd118e2b1464ec9e": "532de77ddbfa1bfb3bca66da1f1f23fb",
".git/objects/38/555a7df2ea05811882cc1f3cf2382d7396fede": "57562a68c730b19e658db20542e1fa39",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "5e80c82718faee206224e26e47316cd8",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "4e247acdfb8d336f54e321bf520ac916",
".git/objects/5c/8350332efdeccd3ec590881f80e4d1a8f5256c": "9ce77831e8a5ede4256c77e54c094edd",
".git/objects/09/1a667182122295fad92be6a937d5f0dd82cb57": "919276b2c47845e99543979cde4c19b0",
".git/objects/5d/57a0e417580177eb8c259ca1db85a4f6b87d7f": "044d5e5bd02d02c589feb5ac91d9877a",
".git/objects/5d/0a7f8ec8d04d7a387fdbabbc6b259400c401cb": "0b93d810e14c0aadf9f5969bfba9bf46",
".git/objects/31/48956a2f637aea667783e7b91eb7b6676d00f7": "6fa97aca5fbdcc22d3d2ee23e3865ad0",
".git/objects/31/c111c1c3401496303b83e293198735089ee85f": "3d8a20c54334546619897093314053d3",
".git/objects/65/97fd38c77760dd60c12725403bc8b5cbc553c3": "8cb28ae42be40cd7d20724a91f22f0e6",
".git/objects/96/2af7507034ef3a871775b104934c795821bc73": "b5735b116f174a2c156a52b7636e2d04",
".git/objects/98/20ccf14af4b4a811c0a2c2c0803d21db25d4c9": "ebe78e8bcc077a8562e87f0aa4cce0f7",
".git/objects/3f/3bf8284f2253083ee4a627b9f1e8fac7292c22": "95ff4aaace8f19dff8b3792dea83ab39",
".git/objects/3f/2a8fbca0418d3f9f154044ae75d2be9ffbbaae": "c1ef24fa5757ebe0a3b9f95764aec223",
".git/objects/3f/05d9ddce14ac6fad286c77e7ce5051fb08aa37": "121da159e1fc16a712d19109943db646",
".git/objects/30/7bb82e02efffe02e96c01a28a88e4dc144e63f": "304874229deca10e73190db55b2bb661",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "abd32dd8b9270de927a303a5c1721d98",
".git/objects/5b/6b4be7b74c3baaaf7e0aa18d6dcbc3e7ca4dce": "22fb40d637519e81cdb0987b48a4263a",
".git/objects/5b/df84d6625e61fa30ec43568acdbc796dcd6d6a": "d9b2078c7acc9d774fad890283733b69",
".git/objects/5b/a47680867529328f2f37def7a2da882f35921c": "2f5e19932a5ca5be6ea24fc75f2fd760",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "7443d0f8a4547e8b15800274d58c84cb",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "510e1327b3e01098af74560b38416c5d",
".git/objects/39/b10c79a5eaa067c53d592c7bb3d1b2afefe0d2": "1f4e25b3fb254aaef35d9e0c60450246",
".git/objects/99/a8b03a7e1b97ec3943b12e213f659fbdb10260": "731948910f6e56432513c452059aee8f",
".git/objects/55/91431e8872fd63f10ba2a4956137415ea7aeb7": "baed1164f46c5faad9ae25ce0e6fb56b",
".git/objects/97/de3634d6cfcb816399f2154e2b111a75170c3d": "ebcef3ae99810a191fd1c0ccfb0caefa",
".git/objects/97/9ff64ed368634ecc324bc93c62d4cc42f7db15": "7b52d678aea6d6d9afb7109d689411ee",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "393bd20ca4479f63d811873c30d6025c",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "69b895d049398297602c9bae31067cc4",
".git/objects/d3/f9f918031626a7769f7998a457606b3e3b0bc2": "fd7ebd3b8dae64448583d1e515c30ee7",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "8829ae4d79e43afb9cf0054d13788889",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "94421b83efae6762e073b129f771d561",
".git/objects/af/c68ef90543f04d1e9a0edfbb21fc982350b596": "924085ac41a5f4f827e244cd48dae073",
".git/objects/af/a92d72722f18d28856cc0e0f726618cd19f703": "be1183452523083a4fdb23980318558b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/e36cedbb857ad6495437956e213858431be257": "a89949f50d5b4446d23074b2d41367c1",
".git/objects/b0/add1521b87bb353df651a248b5b41537992291": "98cf211da01e9a3dfa517d380f56669e",
".git/objects/b0/867e19834681a56931a7c6673d1ca9f6a1f166": "70f35d275038326049cb51c2420f2136",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/c70d2775c1a431f9262062c5900717aed4922a": "b7a9bb8242fb245c2a1e575afbf0ceb5",
".git/objects/a1/302220819034727ddf529b684902989249d6e5": "109ed0f1009115e30529af72c231aad1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/c3/5f20968bea08c64f0b5c44d4aa294b85311014": "55a6b5223e6fb889913afb1445c266f8",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/f9/e6e0390c5cd818ffd2c0853c0c9eb18717eb93": "f5e6ddc7c148abb920f7b67c2f59bf67",
".git/objects/f0/5780ba337827484a357f96541d6e0bf13bbb30": "6bd6cac75e2be41b26ce73263847a9b2",
".git/objects/f0/267b6072cd21e0c305d23e498d71f24ec129ac": "ee3441c43e30ce12205045a75e9f42cd",
".git/objects/e8/92d8f8460fca0e305cf7bb1064e612b249798b": "7ae7a13a390473ca65befb5d9e142000",
".git/objects/e8/9b0b79a2910f0ac309a1845a9f733bcb568792": "d52e47cefaad0f08e64d974dd9b90bc0",
".git/objects/c5/1577b47be820f71ea51f7bb10d60094c5a4d49": "bd7eb44096e752b9c9068f5fbfed869a",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "c5cf48f2c852d46c87eb6e4e16bb8ec7",
".git/objects/f6/fcdef9f40a0f43a533e968be30d0b9c49fbd69": "b80c414acbe99f70a93ce78492794470",
".git/objects/f8/b2a711a5f710c2a423a170897b80d3c305a4d7": "6f955981cf3e59b3652774f8475683b9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "246e3e2b7e888b83fa64eaff60e2ff86",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2d/10a31898fa08265226e2d3bb5632f120f6f8db": "4e67d8a391e63cbb00716df0bf43561e",
".git/objects/41/b6588d9b38705d0917d5e35a8902cfe1cd6dd7": "b1cf3512e3c02ed45530cec9e1c3c277",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "d08abc64adcad35209ccf7f4a231ffba",
".git/objects/1e/af12122cfed52b5cccbb08191aff700025a2cc": "498bc29a0a12289e7ec1e3eb8ad8f9cd",
".git/objects/4a/60c39f3595bbb69c93e05f9408271c6ef90bb7": "6b032b95d6639ea4e0a828bf797ee84e",
".git/objects/15/de0072ec141c17d0c954a3f6141457d1ee9d29": "b4ac473f2dc1fa2069dbbf73c2f38ef0",
".git/objects/85/a02263282f9992d21790df85b55d76c934ad41": "302a3a04b0091664b27c0d01fc89aa89",
".git/objects/1c/927a4f2f4ed48d50493ff0dd74f1cfdb6e44df": "614b435481c288cbbceff5af077c7be8",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "5b89f3cb7c594655e488320fc77990ee",
".git/objects/82/2e9a3f6448816a591d7300537bd890ad695fab": "b3c5bf277471c801a1555f40fbd9d985",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "108184923108792e9c49be2b8a7ef1d9",
".git/objects/40/b0e6e28aebdbeded9eb5fdccc130ee82b987e4": "f2b812319de26a889fa0d519b16a17df",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/47/16493608799c040bcc197ad190e2de550cc1f2": "0282ec44b7f4394d96153ed9a59f4402",
".git/objects/7f/e32c7c436100cd85e34613c84bd31cf3a2f86e": "3b74f8f4d264b1f8219ecde6b49f5f03",
".git/objects/25/fe8d99720911fb50c674eac382e99519bfa395": "209415ce58d6fb6a7e49b7e34416da4f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "43eb61aad6c9085ace88958140b44742",
".git/logs/refs/heads/main": "e124315e43759c27d2ae32f32cdebf86",
".git/logs/refs/remotes/origin/main": "1953cadcf5538dfcd94bf669b46a0bd3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "0602550c268074f0d6a65379825c507d",
".git/refs/remotes/origin/main": "0602550c268074f0d6a65379825c507d",
".git/index": "95e0feb73a5fbd3e12d1298ecd74d7c4",
".git/COMMIT_EDITMSG": "4e0f8557c55a76c18f4bf0532bb9954f",
"assets/AssetManifest.json": "33f304a397939c1ec3b22402a02f2786",
"assets/NOTICES": "2ac027531a8aee4945664e17df980a3d",
"assets/FontManifest.json": "adf93849444d2d511b6c147b242a0da2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/SF-UI-Display-Regular.ttf": "08397c215a9e579b48e778a2fe9b6214",
"assets/fonts/SF-UI-Display-Ultralight.otf": "564c75345b4e8a09a13b3b872e5ba43a",
"assets/fonts/roboto/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/fonts/roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/roboto/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/SF-UI-Display-Black.otf": "63f9e85acd5f75ff050441bf589fd2d5",
"assets/assets/task.svg": "ef76b127f51edb16e1c8f5f3a80a1afc",
"assets/assets/receipt.svg": "3cc085dff24ba32e442f2d91cfaa07dd",
"assets/assets/checkout.svg": "80b7b709efea36b9466cacb5b7692eb0",
"assets/assets/wellcome.svg": "e5c4ba08c1a82ef1dc0c72885b61ca05",
"assets/assets/no_data_project.svg": "6a4fef67b26aeca77d6e52ce4144bdf6",
"assets/assets/nopayslip.svg": "37eaaeb7227c7b8a335751559cda64d0",
"assets/assets/google-maps.svg": "de310801d79a6ee81ecf8b45bc54780c",
"assets/assets/pyslip.svg": "469cc0a2cb882ec2d3c3fa6bab1683ce",
"assets/assets/gallery.svg": "b37dc6ca9d33acf9581da8990d0e124b",
"assets/assets/emplyee_maps.png": "58ee0c6fc5b2f35327b4f33ebe0516ac",
"assets/assets/login.svg": "7cfd4e21416983efa66da91cb44b9c29",
"assets/assets/home.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/assets/check-in.svg": "0e1dd41a54b97c9ace71ea166ec4c101",
"assets/assets/employees.svg": "2afdf4d814bd0d42af0a62cbf2537aff",
"assets/assets/splass.jpg": "d69a58d59a340396ac6f06e4712fee75",
"assets/assets/photo.png": "66550a11aab753ec42bc745948627b77",
"assets/assets/leave.svg": "93b2b4ad948aa8baefb1383f91df489c",
"assets/assets/fingerprint.png": "4cc5df29c5647ea5e02cb9faf4c05f78",
"assets/assets/nobudget.svg": "abe63c21e9b88f90f51398f042db87a2",
"assets/assets/absent.svg": "ae02fcf0b92f6d28f1f31d7e81a6b9c7",
"assets/assets/absen.jpeg": "fef98f155a07c2070d7b0b6d6c28ab4f",
"assets/assets/permission.svg": "00f23bfee716d2e2a357e129cbfc2ff8",
"assets/assets/notification.svg": "8790c2b00fab925eeac90f83d7cbdbe4",
"assets/assets/budget.svg": "c79b36def6a2a61d933f748f042b076d",
"assets/assets/budgetin.png": "bce14ba9e4c841f6f68a1c0b1941d9e4",
"assets/assets/office.png": "0ca93b57f7cda69450015d796fd6b791",
"assets/assets/logo.jpg": "e7ca202038f4d229960dc2d614a1d033",
"assets/assets/camera.svg": "92e346e618611922fce3097119aa76f0",
"assets/assets/profile-default.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/map_style.json": "543cb673019b1afbec50e79c7ea426eb",
"assets/assets/sick.svg": "36f7c934a4ae3382a301cd6eef8cef09",
"assets/assets/splassscreen.svg": "2157eed573e5549570c0cd78846ebc2b",
"assets/assets/checkin.png": "640ca97917fe3798fb5c52076c63c186",
"assets/assets/employee_profile.svg": "6a3966fb7a834f454712c4596dd67d99",
"assets/assets/announcement.jpg": "f351709365d4b1ebb70a21130c0c51c4",
"assets/assets/loan.svg": "a795cca3e856e60342066de18afe890a",
"assets/assets/announcement.svg": "f1e5a05df7d29acec02433a3605a9c0a",
"assets/assets/offwork.svg": "437f6ffcbd0978f2a79bb4a4ec2abb09",
"assets/assets/office.svg": "f71699f511216ebd4acf502e111019a3",
"assets/assets/overtimein.png": "f545fa08f3d475e47dc49094948acfb2",
"assets/assets/map.json": "4400a6e5921eda55ece914989e1598d2",
"assets/assets/budgetout.png": "dc5c69a357b9c9f81b428eea71143d88",
"assets/assets/overtimeout.png": "aa40337d7a64bff2529a9dd863a0324c",
"assets/assets/project.svg": "4627670cb8d332eb72b0e5e15e44a973",
"assets/assets/male_avatar.svg": "0c675689f904736df9b4408c1e33da49",
"assets/assets/female_avatar.svg": "31721699225819c35515bc3a7f91f795",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
