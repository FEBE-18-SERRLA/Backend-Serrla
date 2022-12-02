"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Portofolios", [
      {
        user_id: "1",
        media: "https://4.bp.blogspot.com/-xzGAudYM2fY/V6Gf6l5dG7I/AAAAAAAAfEc/aXfvemGmhUU0RC18WHhpLo-HB5X7HPu-QCLcB/s400/Monalisa%2Bby%2BLeonardo%2Bda%2BVinci.jpg",
        title: "Title1",
        description: "Description1",
      },
      {
        user_id: "1",
        media: "https://4.bp.blogspot.com/-1Q-qTAN_Nw8/V6Gf-tHylPI/AAAAAAAAfFQ/3716POPUoTEk5Y0eAVaiH3bSdftV5UKUQCLcB/s400/Starry%2BNight%2Bby%2BVincent%2BVan%2BGogh.jpg",
        title: "Title2",
        description: "Description2",
      },
      {
        user_id: "2",
        media: "https://3.bp.blogspot.com/-_hf5kXqZQ-M/V6GgCqyQC5I/AAAAAAAAfGM/AJz9aidm8wsH_zlw9xX_iM18qZOHgoS9ACLcB/s400/Whistler%25E2%2580%2599s%2BMother%2Bby%2BJames%2BMcNeill%2BWhistler.jpg",
        title: "Title3",
        description: "Description3",
      },
      {
        user_id: "2",
        media: "https://4.bp.blogspot.com/-zpBkT9D79DU/V6IEGXNtzAI/AAAAAAAAfG0/C2U5_l5RwmcO6X_MCpivbDCm7oaG7sS-QCLcB/s400/Interchange%2Bby%2BWillem%2Bde%2BKooning%252C%2B%2B200.7cm%2Bx%2B175.3cm%252C%2Boil%2Bon%2Bcanvas%252C%2B1955.jpg",
        title: "Title4",
        description: "Description4",
      },
      {
        user_id: "3",
        media: "https://1.bp.blogspot.com/-h92VhqlDLKA/V6Gf0as5aUI/AAAAAAAAfDI/VRzMaPCZROgR9h-wE8-cVstLY1TqH7XOACLcB/s400/A%2BSunday%2BAfternoon%2Bon%2Bthe%2BIsland%2Bof%2BLa%2BGrande%2BJatte%2Bby%2BGeorges%2BSuerat.jpg",
        title: "Title5",
        description: "Description5",
      },
      {
        user_id: "3",
        media:
          "https://1.bp.blogspot.com/-0tKQlfQgJvE/V6Gf0S2vmgI/AAAAAAAAfDM/7Z6uYKax9QA5ARX6FLBiJElGBtiSLjfXACLcB/s400/A%2BWheatfield%2Bwith%2BCypresses%2Bby%2BVincent%2Bvan%2BGogh%252C%2B73%2Bcm%2B%25C3%2597%2B93.4%2Bcm%252C%2Boil%2Bon%2Bcanvas%252C%2B1889.jpg",
        title: "Title6",
        description: "Description6",
      },
      {
        user_id: "4",
        media: "https://2.bp.blogspot.com/-UoUOQ5AdLKw/V6Gf0RxPS0I/AAAAAAAAfDQ/Sc4_ETGKFVQvO1Sgb-MZ0qKRtpC6XNWtgCLcB/s400/American%2BGothic%2Bby%2BGrant%2BWood.jpg",
        title: "Title7",
        description: "Description7",
      },
      {
        user_id: "4",
        media: "https://2.bp.blogspot.com/-aILTOV36268/V6IOI-QjQKI/AAAAAAAAfHE/gpNdP0o8sukJwwFi2p2GNAuNdzZ6fgA0QCLcB/s320/Beheading%2Bof%2BSaint%2BJohn%2Bthe%2BBaptist%2Bby%2BCaravaggio.jpg",
        title: "Title8",
        description: "Description8",
      },
      {
        user_id: "5",
        media: "https://4.bp.blogspot.com/-VEnUR_PFnGg/V6Gf1m_s78I/AAAAAAAAfDc/plwd_zJM7popwGX76XwdX3FFHXLltlDjACLcB/s400/Cafe%2BTerrace%2Bat%2BNight%2Bby%2BVincent%2Bvan%2BGogh.jpg",
        title: "Title9",
        description: "Description9",
      },
      {
        user_id: "5",
        media: "https://2.bp.blogspot.com/-3cQ6syG4vO0/V6Gf1vTy9II/AAAAAAAAfDY/8-vLchrExUwFjORLbtAZhEzAHskeVsnMgCLcB/s400/Composition%2B8%2Bby%2BWasily%2Bkandinsky.jpg",
        title: "Title10",
        description: "Description10",
      },
      {
        user_id: "6",
        media:
          "https://3.bp.blogspot.com/-aFPowLJNmRo/V6Gf2PlhL-I/AAAAAAAAfDg/pSRVf75A2M8oD_vVifgHyxj3Ld1gbi9mACLcB/s400/Darmstadt%2BMadonna%2Bby%2BHans%2BHolbein%252C%2B146.5%2Bcm%2B%25C3%2597%2B102%2Bcm%252C%2Boil%2Bon%2Bwood%252C%2B1526%2BUSD%2B75%2BMillion.jpg",
        title: "Title11",
        description: "Description11",
      },
      {
        user_id: "6",
        media:
          "https://2.bp.blogspot.com/-m27jbU0DoD8/V6Gf2kgp51I/AAAAAAAAfDo/kmoIL3oaErsrGmSu-1lfLVzIzfe_J35owCLcB/s400/Diana%2Band%2BCallisto%2Bby%2BTitian%252C%2B187%2Bcm%2B%25C3%2597%2B204.5%2Bcm%252C%2Boil%2Bon%2Bcanvas%252C%2B1556%25E2%2580%25931559%2B-%2BSold%2BUSD%2B71.7%2BMillion.jpg",
        title: "Title12",
        description: "Description12",
      },
      {
        user_id: "7",
        media: "https://1.bp.blogspot.com/-7CerhvDbzeM/V6Gf2dgg4gI/AAAAAAAAfDk/OwDkVANnzZ0vQ7wFwOD341ysRzbhxl3bACLcB/s400/Die%2BTanzklasse%2Bby%2BEdgar%2BDegas%252C%2B180cm%2BX%2B150cm%252C%2BRp.22.300.000.jpg",
        title: "Title13",
        description: "Description13",
      },
      {
        user_id: "7",
        media: "https://3.bp.blogspot.com/-xDSw-Oqcf8I/V6Gf3M0z0FI/AAAAAAAAfDs/4CKJv1fUJqg_TiWzg6PxhGpEuvFaLCy8ACLcB/s400/Dogs%2BPlaying%2BPoker%2Bby%2BC.M.%2BCoolidge%252C%2B1903.jpg",
        title: "Title14",
        description: "Description14",
      },
      {
        user_id: "8",
        media:
          "https://4.bp.blogspot.com/--i1uGQ2Rl9A/V6Gf3MIlfqI/AAAAAAAAfDw/F5Rhps8ugU0FO4Fzg6OOWa2ex_gzjYt5wCLcB/s400/Dora%2BMaar%2Bau%2BChat%2Bby%2BPablo%2BPicasso%252C%2B128.3%2Bcm%2B%25C3%2597%2B95.3%2Bcm%252C%2Boil%2Bon%2Bcanvas%252C%2B1941.jpg",
        title: "Title15",
        description: "Description15",
      },
      {
        user_id: "8",
        media:
          "https://2.bp.blogspot.com/-TznLyZkkqNA/V6Gf30ddCQI/AAAAAAAAfD0/BUSGOr6n0WwhmqSmPvScATxta7e4N6YTQCLcB/s400/Gar%25C3%25A7on%2B%25C3%25A0%2Bla%2Bpipe%2Bby%2BPablo%2BPicasso%252C%2B100%2Bcm%2B%25C3%2597%2B81.3%2Bcm%252C%2Boil%2Bon%2Bcanvas%252C%2B1905.jpg",
        title: "Title16",
        description: "Description16",
      },
      {
        user_id: "9",
        media: "https://2.bp.blogspot.com/-l48i1kRTOmY/V6Gf34k0nXI/AAAAAAAAfD4/4fxgLyQmhNcqZqZpLd8KFSptkKV75293QCLcB/s400/Girl%2Bwith%2Ba%2BPearl%2BEarring%2Bby%2BJohannes%2BVermeer.jpg",
        title: "Title17",
        description: "Description17",
      },
      {
        user_id: "9",
        media: "https://3.bp.blogspot.com/-CNaDXfsR3Z0/V6Gf4PORTSI/AAAAAAAAfD8/Gjpux_6iisM5bZFSQSUWt_mgVkxyhgexACLcB/s400/Guernica%2Bby%2BPicasso.jpg",
        title: "Title18",
        description: "Description18",
      },
      {
        user_id: "10",
        media: "https://3.bp.blogspot.com/-DOm1O5ONt78/V6Gf4hMIbMI/AAAAAAAAfEA/eEi1OGs4disbhflqfwVnwd8H-ZMf_1yeACLcB/s400/La%2BMoulin%2Bde%2Bla%2BGalette%2Bby%2BRenoir.jpg",
        title: "Title19",
        description: "Description19",
      },
      {
        user_id: "10",
        media: "https://2.bp.blogspot.com/-Ft3D7WVcKQM/V6Gf4-YScAI/AAAAAAAAfEE/MCZCM4JpKk4A8sfs1kCCfc8pScG60e5pACLcB/s400/Landscape%2Bwith%2Bthe%2BFall%2Bof%2BIcarus%2Bby%2BPieter%2BBruegel.jpg",
        title: "Title20",
        description: "Description20",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
