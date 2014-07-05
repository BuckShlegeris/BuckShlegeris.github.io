var allFiles = [".", "./.DS_Store", "./.git", "./.git/branches", "./.git/COMMIT_EDITMSG", "./.git/config", "./.git/description", "./.git/HEAD", "./.git/hooks", "./.git/hooks/applypatch-msg.sample", "./.git/hooks/commit-msg.sample", "./.git/hooks/post-update.sample", "./.git/hooks/pre-applypatch.sample", "./.git/hooks/pre-commit.sample", "./.git/hooks/pre-rebase.sample", "./.git/hooks/prepare-commit-msg.sample", "./.git/hooks/update.sample", "./.git/index", "./.git/info", "./.git/info/exclude", "./.git/logs", "./.git/logs/HEAD", "./.git/logs/refs", "./.git/logs/refs/heads", "./.git/logs/refs/heads/master", "./.git/logs/refs/remotes", "./.git/logs/refs/remotes/origin", "./.git/logs/refs/remotes/origin/HEAD", "./.git/logs/refs/remotes/origin/master", "./.git/MERGE_RR", "./.git/objects", "./.git/objects/01", "./.git/objects/01/8dec988266e40acbb1a9c24a9b42665851cd87", "./.git/objects/01/df142a2e496e4d82e179e44259791084cc7691", "./.git/objects/01/df17de121e6b7107ba82ca1c1c74a40af6f39b", "./.git/objects/03", "./.git/objects/03/0c12a798ed03229e7e0d3f728de497699d9a06", "./.git/objects/05", "./.git/objects/05/689a0f4601f0d5d2a243336dd31ffd28f962b5", "./.git/objects/05/84acfa248746855c90daee3a5aa62c3f4b003c", "./.git/objects/05/ea5c382cdc7abe948d5ebe0822de2495d2ecef", "./.git/objects/06", "./.git/objects/06/62e7eda047ab426f7398fbc4c812e4183bebf7", "./.git/objects/08", "./.git/objects/08/78b04c96dd352025f1164eb85a9cc83e4a2239", "./.git/objects/09", "./.git/objects/09/6a523adb8f41f678fef413b36862d8c8df814a", "./.git/objects/0b", "./.git/objects/0b/107e5f60824da4f028281d29bf3edd6966a92d", "./.git/objects/0b/401c1c61b7121bc19bd9a25e3521b4fb25437b", "./.git/objects/0c", "./.git/objects/0c/5daf2c1475713ddf3f65732c17e9f73a459a57", "./.git/objects/0e", "./.git/objects/0e/3c52ade6e467a6aabda17a0774e2fbafab56ec", "./.git/objects/0e/f3678a00debad446d14f77e03779b3e30fda92", "./.git/objects/10", "./.git/objects/10/c312c90fcecc16cd38af4c7c693fe2b8408225", "./.git/objects/12", "./.git/objects/12/da523b0673042cd0a9f0f6be17524e864d6dad", "./.git/objects/14", "./.git/objects/14/1a41ba61bd3654578acdd75823bdd941c6ff5a", "./.git/objects/14/2f66850c18c8a6cc97447023883af1efae80b7", "./.git/objects/16", "./.git/objects/16/2c416811e8b4ab5e85eeaeffef48b488881e16", "./.git/objects/17", "./.git/objects/17/9acfbb5805b5e9418e98dbdb8001b8b98abeea", "./.git/objects/19", "./.git/objects/19/1f41763380108248f265e68c4dbffc222f14d7", "./.git/objects/19/3abcda3c3b3ba1b60a97870dfb0cb0d0757670", "./.git/objects/1b", "./.git/objects/1b/ff1efc35e8d0397ea8983ecb4899595179d5dc", "./.git/objects/1c", "./.git/objects/1c/484aef6baf6f42025bc47423882e416fc49d70", "./.git/objects/1d", "./.git/objects/1d/0caecea5b0fbc5e0d7cad5e69f9258d613365d", "./.git/objects/1e", "./.git/objects/1e/56bc7f87223861cac382a3e6b3b82e53709808", "./.git/objects/1e/cf09418343ad82d8b408832d76e3382a56ab50", "./.git/objects/1f", "./.git/objects/1f/903895a763e943fcafa6be006391fb63d6cc7d", "./.git/objects/1f/dafffe44e1ecb5748159e30e7f7b796b598bb9", "./.git/objects/20", "./.git/objects/20/4c055bb5e151b29e26e828d2ce02c7b988c388", "./.git/objects/20/5260809a59c31054fb5207a03381154eee76da", "./.git/objects/21", "./.git/objects/21/ff2eb3da3073a3d625bfce864ed12c535d21e1", "./.git/objects/23", "./.git/objects/23/6c36e61523cb44fc236786d66683922b376941", "./.git/objects/24", "./.git/objects/24/c3ff7c5e71dfa48f2ae853f349cc999757cb6c", "./.git/objects/27", "./.git/objects/27/3a1d7003d78ed6e6c3459a4505fcd17a64d44f", "./.git/objects/2a", "./.git/objects/2a/ec94e673238319620865860aab0286ea668388", "./.git/objects/2b", "./.git/objects/2b/de200eee245b097e19575bcdea12d989633551", "./.git/objects/2c", "./.git/objects/2c/2c02cc344ab27a56921ce68550cd3048e858b4", "./.git/objects/2c/7feec6c62a0db6938d9b38fdb63ae470967a87", "./.git/objects/2c/c6d2a5d0db3cfa2ba04b6ac9921f0f6b15c127", "./.git/objects/2c/deb6aa1a27e6df23a1f73b59c969faa8dd1129", "./.git/objects/2d", "./.git/objects/2d/330b87dd3d89b188c1b6ce16df8a81fab95d93", "./.git/objects/2d/385a0268d1bedfbea9315b72e924f79b2f9c8e", "./.git/objects/2d/4e2b5a8e6d3d21a0aa9ec9627d6094264057e1", "./.git/objects/32", "./.git/objects/32/0b437c66c2cc6cb2786608faebec9e29a4eb18", "./.git/objects/32/a44b194919772912a6b5341a8c344adc83f000", "./.git/objects/32/dfbe7a8dbb4ebe706a3ecb74ad2f04484ac1f6", "./.git/objects/34", "./.git/objects/34/0c467aa461a96db88e8dccb969e63dcfa12243", "./.git/objects/34/58196ad5b24840113482294ac3c51df7c28bb1", "./.git/objects/34/79ece77c471bce7f6ac1f0f41864094e40e31b", "./.git/objects/35", "./.git/objects/35/7b87e6eed0404afed1c079bec1bbc67e835843", "./.git/objects/38", "./.git/objects/38/adf057795164741dbaaf626f1d1731afc378f8", "./.git/objects/39", "./.git/objects/39/74a556a2b075759c9253bb41aa6f07063faf50", "./.git/objects/39/b739df4b06ceab197d6e50df23b9aee29211e9", "./.git/objects/3a", "./.git/objects/3a/1ebf3064be7822683ff481e5a5f0af7980cf70", "./.git/objects/3b", "./.git/objects/3b/b5fc324a5026890ea06d5da6749993d1a37b4c", "./.git/objects/3d", "./.git/objects/3d/7c3f5c606150b8bc6166e22beadb11cca3d40e", "./.git/objects/3d/d0918c73204f09e0b7609779aad2a239715084", "./.git/objects/3d/dcb0dba4cb4850dd7552caccad4f2f16714f13", "./.git/objects/3e", "./.git/objects/3e/bd5ee656768943e2e7d07c0fe9158c4b678c3b", "./.git/objects/40", "./.git/objects/40/51430328761fbdd22e9c6396d9971f2933ef96", "./.git/objects/42", "./.git/objects/42/6eadef87ae0d6ea2846c31f8fa693b0f065a01", "./.git/objects/42/7105388a18f106318c6f165248341401be4820", "./.git/objects/44", "./.git/objects/44/b3efac42e180a71af39297744fdd0acd0ffcb3", "./.git/objects/44/d169f010a4cc47a4c7ea12aaf674f7bf17b4b7", "./.git/objects/48", "./.git/objects/48/027cf45c2f0f601c1b5b4d37f4ee72a8fab378", "./.git/objects/48/a5b24e0788d0e5c96c18360bc68764ecab74b8", "./.git/objects/49", "./.git/objects/49/9b8a8e428ecabd8bc7dacc286ce795abcc204d", "./.git/objects/4a", "./.git/objects/4a/4ca865d67e86f961bc6e2ef00bffa4e34bb9ed", "./.git/objects/4a/861172a51922e1b78cfa93ca02d358eda87a1c", "./.git/objects/4c", "./.git/objects/4c/68da87e87c0d0e37636c0369add52b11d3c30e", "./.git/objects/4d", "./.git/objects/4d/47d7aa1ffc60df1300034176f6906a789bf4ef", "./.git/objects/4d/5d68cb94c84ae621f33918d3a265d5ede56637", "./.git/objects/4d/7d75cffbccf1de33c84ea4f00666a3e5869503", "./.git/objects/51", "./.git/objects/51/2e21b7aac23cb9b5e0b763665fa8a461c6eb2c", "./.git/objects/51/372e567ae4450e3218db11017e6563737d5ec5", "./.git/objects/51/39d4cf32f8542519e67ee8612bb515c0cd126a", "./.git/objects/52", "./.git/objects/52/f3b47526d7aef721784174dbc3a7b2dfc78178", "./.git/objects/54", "./.git/objects/54/540cc6cf3da1e06d6428066d24bbae00d13b52", "./.git/objects/54/cf1e3897219952451a5b43d1d9c97c2e024809", "./.git/objects/54/f2abe6a052ec88719a16b152ecdb3f435476cd", "./.git/objects/55", "./.git/objects/55/7db03de997c86a4a028e1ebd3a1ceb225be238", "./.git/objects/55/a609e60932043d5b6b9f3bd0aa036d10d0bb5b", "./.git/objects/58", "./.git/objects/58/e4c024a18c64cf9e01e99fb2b219ecf7012718", "./.git/objects/5a", "./.git/objects/5a/71291cf8bde089c80616aa303207084d95c664", "./.git/objects/5a/a12454ede0d7688fecf50df5a7a6d8db020a7d", "./.git/objects/5a/e49f4b499550f499e2f8a509d74c3449cadfe2", "./.git/objects/5a/f34c10ecd04a26235709ac9193513a009462db", "./.git/objects/5c", "./.git/objects/5c/bcf4e920b253a995fdc5207042ef6cdd813a90", "./.git/objects/5c/d3117d5cbc2b478ac43fd3e8f064d227343d0f", "./.git/objects/5d", "./.git/objects/5d/b80034ad27ac54a17876037a9fc1aebdc6d1c7", "./.git/objects/5e", "./.git/objects/5e/2845e85e1d5fd1eb4791ae927ed48df91f82b7", "./.git/objects/5f", "./.git/objects/5f/a858fc139899394d5d9bcb0a22468abdab7ce6", "./.git/objects/60", "./.git/objects/60/aa45ff9c63aaaa89148414fa2c1dca11190577", "./.git/objects/61", "./.git/objects/61/f3a0b76fe4bbf9e1cc47735f693b94967fdbd0", "./.git/objects/62", "./.git/objects/62/90ad2e2479537416acdb79da51ee4d3910ffdf", "./.git/objects/64", "./.git/objects/64/1ba4ef2d61d61add936a3754399c4d80c10561", "./.git/objects/65", "./.git/objects/65/d82f8d608658bee3e29826c19c9b66e022d5e6", "./.git/objects/66", "./.git/objects/66/42d534d4a8db163b90aaa5a5bc66945d21fb2d", "./.git/objects/67", "./.git/objects/67/5de29e129074abc611cabe1db0902e71ffd33a", "./.git/objects/67/fa00bf83801d2fa568546b982c80d27f6ef74e", "./.git/objects/68", "./.git/objects/68/8b23dc937ccb66ed65f2ecc5cc338835bef358", "./.git/objects/68/e0c13bd585b1f5997efbc6a5d75b977d36fd4d", "./.git/objects/6a", "./.git/objects/6a/0f9deae6352f21be1f2a69a39f37b492b5131a", "./.git/objects/6a/4f531372d83793382160a4d43b455ee67945e6", "./.git/objects/6a/aa1919c3ab868c1da5d584ce31e693b3d706eb", "./.git/objects/6a/b1a14307baff0c59dab21db808a9e62cf5a0b4", "./.git/objects/6b", "./.git/objects/6b/36f5d9a336df97770378d769306e5e194dddee", "./.git/objects/6b/c5a2dc75413860670f9e657d62b64cf15fd195", "./.git/objects/6d", "./.git/objects/6d/2adcb9181833f05a942d365893818fdd10f241", "./.git/objects/6d/9796e1efeea10aac8325a18cbfc86bf97504f7", "./.git/objects/6d/c3bdda38d2d6a305820a28b339cc05f81db313", "./.git/objects/70", "./.git/objects/70/b7d63a67b8229650a468e5f323bb18fb7c7f24", "./.git/objects/74", "./.git/objects/74/37ac7f11396f2fb4fc42ca12c97dd3e982fb9a", "./.git/objects/75", "./.git/objects/75/1f8cb65fa89bea8f555a279870e9b15a2bde15", "./.git/objects/75/261245effed90afeb2093dab7331cb2a0e49a4", "./.git/objects/76", "./.git/objects/76/1e4b4bce4b97c1ffdcbe6e8499cc3b04af78fd", "./.git/objects/78", "./.git/objects/78/97cee1fd397a733b8b0fa420f492bded39ce9b", "./.git/objects/7a", "./.git/objects/7a/10b0c881a5a28667e2378096b14d6dcc5463ca", "./.git/objects/7a/498af7c1ad895c8fffbc1accf23ed6e2787cea", "./.git/objects/7a/aebcbe4c7dbfd12bcec81c838739016b1efdd4", "./.git/objects/7c", "./.git/objects/7c/933ad92c43fa0b58c35b423c54670c6e6c2fa0", "./.git/objects/7c/e37f366eda8fb9ba3b547a8cdcb30dfac20a75", "./.git/objects/7e", "./.git/objects/7e/0863612736288abb543886a322a2bf43416abe", "./.git/objects/7e/868012c2c008c444d88f519d45fc34b1f6b6ef", "./.git/objects/7f", "./.git/objects/7f/36651961ed5bc42a712042c6db5493b4ce99e9", "./.git/objects/80", "./.git/objects/80/71a1fecb8b936415cd21e207aa7a1e2c54fb35", "./.git/objects/81", "./.git/objects/81/5054192fac4bab675b5049a93c93c2bed2d002", "./.git/objects/84", "./.git/objects/84/12f3a07ff63f4f7dc78cc0fc39318a0cb88f79", "./.git/objects/88", "./.git/objects/88/badd36fbc032fcc78cdcf73b231c9c71e181c2", "./.git/objects/89", "./.git/objects/89/13d729da5229ba705b71e5f4b46040e1f893cc", "./.git/objects/89/5eb8d478eeef8e49c32af494867dbca95275c0", "./.git/objects/89/7a60e6619abcbff8d066739180fad151742da5", "./.git/objects/8a", "./.git/objects/8a/885f4b286c611257b843c589eaf66d2961214d", "./.git/objects/8a/e571b6da5be9c7dcd95ba25896ae39e1917445", "./.git/objects/8b", "./.git/objects/8b/9436020fc8bb770eb9c9c305b22d7fc391fb7b", "./.git/objects/8c", "./.git/objects/8c/54182aa5d4d1ab3c9171976b615c1dcb1dc187", "./.git/objects/8c/854218c0444c890ae622e3be56366e078f9e50", "./.git/objects/8c/aaba9b852bb5d73da820d5057ec3523adcc46c", "./.git/objects/8d", "./.git/objects/8d/d3d68a2e8a895682d0e54d1df7295131e9de0d", "./.git/objects/8e", "./.git/objects/8e/809533d1a5a285e351829512ee6f81a9dda0f2", "./.git/objects/91", "./.git/objects/91/1595ea2118531235bead3c29faece09d3cc7c9", "./.git/objects/93", "./.git/objects/93/22368d26a2cffc9a1ff3695d8ecaf1c77498c1", "./.git/objects/93/4518f069bb456e98c7e740e033b83eb6364715", "./.git/objects/94", "./.git/objects/94/688a93042fb4c5ddcf4071b874fee33394202c", "./.git/objects/95", "./.git/objects/95/98c4d2e38b2234d3fdec22a50d154ee3fa4ae5", "./.git/objects/96", "./.git/objects/96/bca98d8e1cfa4b647c452b04bb356bdd87ce66", "./.git/objects/97", "./.git/objects/97/7e74dc500724bf6ac05b7411af618453b38b50", "./.git/objects/98", "./.git/objects/98/913148593bb1c0592caddf08751a16dc3f7198", "./.git/objects/98/b1cc3ed93bfe834c83a3f6f34e596a33567676", "./.git/objects/99", "./.git/objects/99/02eedd4dca1db4ae19c6a1b0372d4f81b3047d", "./.git/objects/99/6787e6674fde921d7582aed1c4c0da7c387527", "./.git/objects/99/814fd766f9fffaae517b22202e82c0014a79f5", "./.git/objects/9b", "./.git/objects/9b/238bd44614dfc8d00661ccbe1cf636d95069da", "./.git/objects/9c", "./.git/objects/9c/5a1b1d9837f8a08968eaabc5412c94b3db8cc0", "./.git/objects/9d", "./.git/objects/9d/36d71a96f044dc4b7b0cd24d5b31e15bdc77f0", "./.git/objects/9d/98cddc29b98cae6de13ffb9153734f0082b2e6", "./.git/objects/9d/b2624765ff245772de3b96c04e3d9b9f1198d0", "./.git/objects/a1", "./.git/objects/a1/a0d7410490bfcdfbb0ac6170005d5f96b23fba", "./.git/objects/a1/db3b6c0580ac3cb46ae1e6d9400ac07b322cb7", "./.git/objects/a3", "./.git/objects/a3/43c131cffdc62753443bb78c17d3b108e4bd56", "./.git/objects/a4", "./.git/objects/a4/069929bceb661eacbd4b1eb21306cfa5a1c8f9", "./.git/objects/a4/b29492ffe0b11afa9010a51532e3a5de5c12a1", "./.git/objects/a6", "./.git/objects/a6/70c1c9b989c74ac94922a19ee51efde847661e", "./.git/objects/a6/b50bf554d330129daf6db6c71f6e26fb2db6f7", "./.git/objects/a7", "./.git/objects/a7/6fd080b76cc648fd44a2018c5f936c1e8519d9", "./.git/objects/a9", "./.git/objects/a9/d5edba794f6f634d44447af8de4307066e71d1", "./.git/objects/ab", "./.git/objects/ab/27c6b1b76ad05deadf8f751c3be39191acb6c6", "./.git/objects/ab/3f56f91b13f7a5dc3906ae0dfd30abff59a36d", "./.git/objects/ab/c2fa567bb41d4b365f13de64b9a4995219f20d", "./.git/objects/ac", "./.git/objects/ac/19f96cad8af7a7bba51c5f20b3c7a22728d5d9", "./.git/objects/ac/507fad38f94ad0c6f0a06f14f9b932ddd6f1b8", "./.git/objects/ad", "./.git/objects/ad/aab7b099de3c45db05a494de21832b82b15cd9", "./.git/objects/ad/cb719095e196e1848148753f0d33652aeb242c", "./.git/objects/ae", "./.git/objects/ae/ed1df771a0fb9f9089e94ee3383bd5faaad537", "./.git/objects/af", "./.git/objects/af/f9a0a4df4dabc974adc7ef526060a9b000b825", "./.git/objects/b0", "./.git/objects/b0/4a0e82fffee109e8cd5e48b3f3aa2a9b2aceff", "./.git/objects/b0/b567c639109d7c1b2d695d880525982488498f", "./.git/objects/b1", "./.git/objects/b1/4b1ef77e289638872eb7a7830fba77e7c3bc5f", "./.git/objects/b3", "./.git/objects/b3/6fc9a4970e41d7a3bfdb67780e93ab18a68faf", "./.git/objects/b5", "./.git/objects/b5/15dcc0acb226864c208445958e5b6c73ef19b0", "./.git/objects/b5/6df7ef2748e6937d9efdf20ba6998b27e0a31b", "./.git/objects/b5/a1949ea2a5d4468904555ed076d480863a4cf3", "./.git/objects/b7", "./.git/objects/b7/e4bbc25726c39112b165885b306b35568cf7f0", "./.git/objects/b8", "./.git/objects/b8/38800ffb14ac6a3a0abc134fa5e212f35b3a0d", "./.git/objects/b8/3bb557fed9f77e1b435fcd04b2586832d21d3b", "./.git/objects/b8/51cd1b496abadc9c179e93df70309f56cc8b47", "./.git/objects/ba", "./.git/objects/ba/4bd28ae51616917024b5d4a8d2d20b969a9e31", "./.git/objects/bc", "./.git/objects/bc/63d92acf5305b0dd34a4d2f2db7f2ca48a1454", "./.git/objects/bc/f0395ffd9983ff00e3d97f3f1ecb74939e588e", "./.git/objects/be", "./.git/objects/be/649d20b341f1dd8cc74014ed3f96c94404c0f7", "./.git/objects/bf", "./.git/objects/bf/9f7da576e0cc2c13ecddec17212222a00d2d78", "./.git/objects/c1", "./.git/objects/c1/32619d159b8a54259246207685b2817d5999a2", "./.git/objects/c1/391cf8bcff678be1a8dccb43f0c457326cf94f", "./.git/objects/c1/f7c66a5ef35844928be0802c954956995cb161", "./.git/objects/c2", "./.git/objects/c2/42043e00cd9ad7071c59cc638637a66b0c9c9a", "./.git/objects/c2/fb6a88eb3f2a2cb9f96b9e0f761de9677a7a6f", "./.git/objects/c3", "./.git/objects/c3/132024a5fde054277f627f4f51480cc2d3d5dc", "./.git/objects/c5", "./.git/objects/c5/d67d4926eceb3726f935c83ab6402b0e8ce5ee", "./.git/objects/c6", "./.git/objects/c6/a92a110e9ff813bb1ff2c126d5604f4bb080d9", "./.git/objects/c6/c439ce4e3d605ea1f324ec7685550e4281feea", "./.git/objects/c8", "./.git/objects/c8/436ec513f187c798146c11b28e5e3e1f9e544c", "./.git/objects/c9", "./.git/objects/c9/7ee07753c76dda41921bb1e15e6cc09f34b35d", "./.git/objects/cd", "./.git/objects/cd/1fcf3667b985023aa9bfbf876215671fb5f800", "./.git/objects/ce", "./.git/objects/ce/16b257c0e7a8d9684aa1e93966848e4d09ca9b", "./.git/objects/d0", "./.git/objects/d0/471e24fce73114f668e084b70d3e502b6b100a", "./.git/objects/d0/7a6197e3866728806762580a3ea8ec16923bb3", "./.git/objects/d1", "./.git/objects/d1/1ac8e1fe8f10e56d527396d6bb143cb89283d3", "./.git/objects/d2", "./.git/objects/d2/b4660dc4c9e34932a1770a6319e8feec38506d", "./.git/objects/d2/d92e90ba84267a0a834e013e1e38f9894ba02c", "./.git/objects/d4", "./.git/objects/d4/8209ae7e02bdd52ed138fb40e8fb3e3f61b94c", "./.git/objects/d4/ee50f428228d97f3f8480feed971466458ac46", "./.git/objects/d5", "./.git/objects/d5/07de12e8a62bf447bafcb57201691471b5703d", "./.git/objects/d5/082f1470d7702618b20d77f1ca6393bcefb88b", "./.git/objects/d5/3c3a4cea69f289f7b1dfd5d443d3e984d9a365", "./.git/objects/d6", "./.git/objects/d6/1a0e82fe33b887eb3576c46ab83494a106caa0", "./.git/objects/db", "./.git/objects/db/7b947e1ed8fa23f90d649779804001b5f0519f", "./.git/objects/de", "./.git/objects/de/257567f1ae42a4476870b436997d00d7fee05a", "./.git/objects/de/9bea392b279962f7cbaba0961c94064cbf8099", "./.git/objects/df", "./.git/objects/df/9eb6428c1ddc7c7f55e4153062e9626f328cd2", "./.git/objects/e0", "./.git/objects/e0/0658d3bcc259130144847cae7be9d306eb1605", "./.git/objects/e0/0cbcdcf374c6efb8ac30c6ffdbaec58b39028c", "./.git/objects/e0/6b51db714f2292b5c95b7d0ce3421b9e8134fa", "./.git/objects/e2", "./.git/objects/e2/fa127229ea1c668e424eabc82ce1535ebc1e70", "./.git/objects/e3", "./.git/objects/e3/e2dc739dd851f2d7d291be032e30b909e3e95f", "./.git/objects/e4", "./.git/objects/e4/128109b3c5b07702f93b4cbdd89b3b36f72f83", "./.git/objects/e4/9deadb919a152e86019c65727d478636a68d0c", "./.git/objects/e4/af3bade08626c3bba8da5e428b107b9dd89e5c", "./.git/objects/e5", "./.git/objects/e5/00d3cc1c4b70be0caa8cd99ad62f2f146bd51d", "./.git/objects/e5/ad0a20f8a4e68f3bae8d15b114f78560282acc", "./.git/objects/e6", "./.git/objects/e6/70fe735fa84728c02d57a2368c25cc5fc83169", "./.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391", "./.git/objects/e6/ab33629e80b6e1238b8d013873010a1c9f77f5", "./.git/objects/e7", "./.git/objects/e7/d90d4ddc9ab78764d5563f3a70d13ff8f5bad4", "./.git/objects/e9", "./.git/objects/e9/c277740e32218da3ebaa5ddd1e93e8727d6a79", "./.git/objects/ea", "./.git/objects/ea/0203178b94b37c84be0ca563049c2907303a36", "./.git/objects/ea/f1bdb89773a53a4e4b678bed7d4739c35363e9", "./.git/objects/ec", "./.git/objects/ec/4ec3e393fa2112f2e08538a5c33cadd8927b34", "./.git/objects/ed", "./.git/objects/ed/5525ce2e1805107a3c8a911e98b8b3fc778bcd", "./.git/objects/ee", "./.git/objects/ee/b998b42b6245a7baa69db95f06b944f1bfe548", "./.git/objects/ee/d76b3c84301cfd41fc845c1a3804b5db2eae2b", "./.git/objects/ef", "./.git/objects/ef/1595727eb9769f7b05f1511b40453f8033731b", "./.git/objects/ef/2512243eff8d73a03eac6578428fa044265016", "./.git/objects/f0", "./.git/objects/f0/720b1e0887fbe67d3dbc602518bbbd8efcd8a9", "./.git/objects/f1", "./.git/objects/f1/4aa4be6960c8f091f8e2a9a715855b916b672a", "./.git/objects/f2", "./.git/objects/f2/14ff533960af268dbead59dc3008a85adf1b32", "./.git/objects/f2/3e54680b733bda6c050da350d99bdea7fb9933", "./.git/objects/f4", "./.git/objects/f4/3b362786b891004eaaadceb01f27546bd5854d", "./.git/objects/f4/810cdea7147fee1908c5d78b4d798454b5211b", "./.git/objects/f4/a3240692d4ea23dc2d21a7367aa6fe40004f0c", "./.git/objects/f5", "./.git/objects/f5/cc15f8ed46d5b4e893c594489847b3320e2c6a", "./.git/objects/f6", "./.git/objects/f6/9850382501abb9d678d7be841d37f2affc6a4c", "./.git/objects/f6/d45d690698fcb44471a7256c9b6f6182dea9e5", "./.git/objects/f7", "./.git/objects/f7/acca4cb8e97e25aedb213a9b5b27522279fdc9", "./.git/objects/f7/cdf34fbfa41fb34a6112704ba41d060c2e4fd0", "./.git/objects/f7/e7ae3740bed35397e2aaa14f7610c76c17d384", "./.git/objects/f8", "./.git/objects/f8/4378dc7d6a44ce6e3858e42717f2a3682f847b", "./.git/objects/f8/9a017e3e660cfda5beeb428cf7da17582fd9f7", "./.git/objects/f9", "./.git/objects/f9/9bacee03bf03a47c1a9a72e6c014f5e770b8b8", "./.git/objects/f9/a9891f19a7838ff3c57b8ed97c75a736c5a92e", "./.git/objects/fa", "./.git/objects/fa/00688a9668f640912dd94d992c098187e96f06", "./.git/objects/fd", "./.git/objects/fd/fe35a49f4e5ed6c18a52eb7442b385d6886487", "./.git/objects/fe", "./.git/objects/fe/67d5cecc4415a5d92ed2d229ba85a39893f79d", "./.git/objects/ff", "./.git/objects/ff/61d42e25abf43e4450a4846584b3d71e659bb2", "./.git/objects/ff/79c97295a909f8f559dad48d1635f119139785", "./.git/objects/info", "./.git/objects/pack", "./.git/packed-refs", "./.git/refs", "./.git/refs/heads", "./.git/refs/heads/master", "./.git/refs/remotes", "./.git/refs/remotes/origin", "./.git/refs/remotes/origin/HEAD", "./.git/refs/remotes/origin/master", "./.git/refs/tags", "./.git/rr-cache", "./against_saving_lives.md", "./bootstrap-386.js", "./buck_shlegeris_resume.aux", "./buck_shlegeris_resume.log", "./buck_shlegeris_resume.pdf", "./buck_shlegeris_resume.synctex.gz", "./buck_shlegeris_resume.tex", "./file_data.js", "./files_list", "./img", "./img/buck_small.jpg", "./img/music.jpg", "./img/submission_app.jpg", "./img/submission_app.tiff", "./index.html", "./json2.js", "./keymaster.js", "./lectures", "./lectures/design_patterns.aux", "./lectures/design_patterns.log", "./lectures/design_patterns.nav", "./lectures/design_patterns.out", "./lectures/design_patterns.pdf", "./lectures/design_patterns.snm", "./lectures/design_patterns.synctex.gz", "./lectures/design_patterns.tex", "./lectures/design_patterns.toc", "./make_lists.rb", "./music", "./music/.DS_Store", "./music/Atheist.chords", "./music/Eyes.chords", "./music/Girl_don't_want.chords", "./music/make_chord_files.rb", "./music/output_htmls", "./music/output_htmls/Atheist.html", "./music/output_htmls/Eyes.html", "./music/output_htmls/Girl_don't_want.html", "./music/output_htmls/Math1115.html", "./music/output_htmls/Saturday_Nights.html", "./music/output_htmls/Tim's_Soliliquy.html", "./music/output_pdfs", "./music/output_pdfs/Atheist.pdf", "./music/output_pdfs/Eyes.pdf", "./music/output_pdfs/Girl_don't_want.pdf", "./music/output_pdfs/Math1115.pdf", "./music/output_pdfs/Saturday_Nights.pdf", "./music/output_pdfs/Tim's_Soliliquy.pdf", "./music/Saturday_Nights.chords", "./music/Tim's_Soliliquy.chords", "./primes.html", "./README.md", "./resume.aux", "./resume.cls", "./resume.log", "./resume.pdf", "./resume.synctex.gz", "./retro_bootstrap.css", "./voting_systems.html"];
var allSubdirectories = [".", "./.git", "./.git/branches", "./.git/hooks", "./.git/info", "./.git/logs", "./.git/logs/refs", "./.git/logs/refs/heads", "./.git/logs/refs/remotes", "./.git/logs/refs/remotes/origin", "./.git/objects", "./.git/objects/01", "./.git/objects/03", "./.git/objects/05", "./.git/objects/06", "./.git/objects/08", "./.git/objects/09", "./.git/objects/0b", "./.git/objects/0c", "./.git/objects/0e", "./.git/objects/10", "./.git/objects/12", "./.git/objects/14", "./.git/objects/16", "./.git/objects/17", "./.git/objects/19", "./.git/objects/1b", "./.git/objects/1c", "./.git/objects/1d", "./.git/objects/1e", "./.git/objects/1f", "./.git/objects/20", "./.git/objects/21", "./.git/objects/23", "./.git/objects/24", "./.git/objects/27", "./.git/objects/2a", "./.git/objects/2b", "./.git/objects/2c", "./.git/objects/2d", "./.git/objects/32", "./.git/objects/34", "./.git/objects/35", "./.git/objects/38", "./.git/objects/39", "./.git/objects/3a", "./.git/objects/3b", "./.git/objects/3d", "./.git/objects/3e", "./.git/objects/40", "./.git/objects/42", "./.git/objects/44", "./.git/objects/48", "./.git/objects/49", "./.git/objects/4a", "./.git/objects/4c", "./.git/objects/4d", "./.git/objects/51", "./.git/objects/52", "./.git/objects/54", "./.git/objects/55", "./.git/objects/58", "./.git/objects/5a", "./.git/objects/5c", "./.git/objects/5d", "./.git/objects/5e", "./.git/objects/5f", "./.git/objects/60", "./.git/objects/61", "./.git/objects/62", "./.git/objects/64", "./.git/objects/65", "./.git/objects/66", "./.git/objects/67", "./.git/objects/68", "./.git/objects/6a", "./.git/objects/6b", "./.git/objects/6d", "./.git/objects/70", "./.git/objects/74", "./.git/objects/75", "./.git/objects/76", "./.git/objects/78", "./.git/objects/7a", "./.git/objects/7c", "./.git/objects/7e", "./.git/objects/7f", "./.git/objects/80", "./.git/objects/81", "./.git/objects/84", "./.git/objects/88", "./.git/objects/89", "./.git/objects/8a", "./.git/objects/8b", "./.git/objects/8c", "./.git/objects/8d", "./.git/objects/8e", "./.git/objects/91", "./.git/objects/93", "./.git/objects/94", "./.git/objects/95", "./.git/objects/96", "./.git/objects/97", "./.git/objects/98", "./.git/objects/99", "./.git/objects/9b", "./.git/objects/9c", "./.git/objects/9d", "./.git/objects/a1", "./.git/objects/a3", "./.git/objects/a4", "./.git/objects/a6", "./.git/objects/a7", "./.git/objects/a9", "./.git/objects/ab", "./.git/objects/ac", "./.git/objects/ad", "./.git/objects/ae", "./.git/objects/af", "./.git/objects/b0", "./.git/objects/b1", "./.git/objects/b3", "./.git/objects/b5", "./.git/objects/b7", "./.git/objects/b8", "./.git/objects/ba", "./.git/objects/bc", "./.git/objects/be", "./.git/objects/bf", "./.git/objects/c1", "./.git/objects/c2", "./.git/objects/c3", "./.git/objects/c5", "./.git/objects/c6", "./.git/objects/c8", "./.git/objects/c9", "./.git/objects/cd", "./.git/objects/ce", "./.git/objects/d0", "./.git/objects/d1", "./.git/objects/d2", "./.git/objects/d4", "./.git/objects/d5", "./.git/objects/d6", "./.git/objects/db", "./.git/objects/de", "./.git/objects/df", "./.git/objects/e0", "./.git/objects/e2", "./.git/objects/e3", "./.git/objects/e4", "./.git/objects/e5", "./.git/objects/e6", "./.git/objects/e7", "./.git/objects/e9", "./.git/objects/ea", "./.git/objects/ec", "./.git/objects/ed", "./.git/objects/ee", "./.git/objects/ef", "./.git/objects/f0", "./.git/objects/f1", "./.git/objects/f2", "./.git/objects/f4", "./.git/objects/f5", "./.git/objects/f6", "./.git/objects/f7", "./.git/objects/f8", "./.git/objects/f9", "./.git/objects/fa", "./.git/objects/fd", "./.git/objects/fe", "./.git/objects/ff", "./.git/objects/info", "./.git/objects/pack", "./.git/refs", "./.git/refs/heads", "./.git/refs/remotes", "./.git/refs/remotes/origin", "./.git/refs/tags", "./.git/rr-cache", "./img", "./lectures", "./music", "./music/output_htmls", "./music/output_pdfs"];
