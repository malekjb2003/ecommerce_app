import React from 'react';
import Product from './Product'; 
import './Products.css'


const Prod =[
    {
        posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2Pw0agyFldPYabWqxNvGoOUksYpIeSehFQ&usqp=CAU',
        id:1,
        productName:'elf foundation',
        price:'50dt',
    },
    {
      posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAIdbayPsXlVmxpLTDX3a1OUr0pWrrTMT8A&usqp=CAU',
        id:2,
        productName:'dior foundation',
        price:'80dt',
        
    },
    {   
      posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjF37cpfOhoPr_wHFrPPjp9t9hzROFpjkijHbQOeaoFI-PL-wTeHcJGVEoN2A0e6evqcg&usqp=CAU',
        id:3,
        productName:'mac foundation',
        price:'120dt',
        
        
    },
    {   posterUrl:'https://www.sephora.ae/dw/image/v2/BCZG_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwc9c2c2dd/images/hi-res/SKU/SKU_3112/586479_swatch.jpg?sw=265&sh=265&sm=fit',
        id:4,
        productName:'nars foundation',
        price:'45dt',
        
        
    },
    {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DY-bbGwFdycn_T-zhSRH22D6IhLYkMaKRMlu3Ydm9hpuCy7aLzaY0MCZiGiUTg8iof8&usqp=CAU',
                        id:1,
                        productName:'elf lipstick',
                        price:'30dt',
                        
                    },
                   
                    {    posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-s4sP01wCohVDrDnx0ed5eq81UNFiTqkDiw&usqp=CAU',
                        id:3,
                        productName:'mac lipstick',
                        price:'75dt',
                       
                    },
                    {   posterUrl:'https://www.sephora.com/productimages/sku/s2490902-main-zoom.jpg?imwidth=315',
                        id:4,
                        productName:'nars lipstick',
                        price:'20dt',
                        
                    },
                    {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56hIK_bM520o7ZDJJMjz4ElCEmrIflVrLn9n8871Ng_Q3vG4QRpvlwDo3TKAoY95tHu4&usqp=CAU',
                    id:1,
                    productName:'elf concelear',
                    price:'66dt',
                    
                },
                {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3W6FMAVAfDLyljVsUhKy7b6SkUiySPXzIFSRvJKCfZ5rfO3aY6qb4fCKxFxDi8W6rAQ&usqp=CAU',
                    id:2,
                    productName:'dior concelear',
                    price:'120dt',
                    
                },
                
                {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuXO0IBjLss_WBe0acnNxff7gRsp4DuqGiA&usqp=CAU',
                    id:4,
                    productName:'nars concelear',
                    price:'35dt',
                    
                },
                {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2b76XYzJTcXIZATPykkIJCQ7_qc9l1GHmNQpcSJoRTVM8fxm8dpWrXiAAfnAhFCyBNmc&usqp=CAU',
                        id:1,
                        productName:'elf blush',
                        price:'150dt',
                        
                    },
                   
                    
                    
                    {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpJG-h97bM1UhTzDXYIolaDGY7EbfjDKsJt8wpup0LqIZtKhOFo5GDai7MLr22FbRzGc&usqp=CAU',
                    id:1,
                    productName:'elf highlighter',
                    price:'65dt',
                    
                },
                {    posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWAJU_Ybfq7PJ__TjCo8hAhVuCTjyRqUKvpMyvahsH9SeMmQLV1lxN1ffW-ggyYWj2wA&usqp=CAU',
                    id:2,
                    productName:'dior highlighter',
                    price:'70dt',
                   
                },
                {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4XiQ21euezpV2g6n_EOba5cEzoclzoEm2hQruP8yrpH4iMz19yTyJYiH25hz3hwwGJc&usqp=CAU',
                    id:3,
                    productName:'mac highlighter',
                    price:'99dt',
                    
                },
                {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hbMmo8qBhbeaaTydRViTrb0o9zBq8q3JWMW1hkQ7YD1eYVoCJIQAt676tIGt1wK6yb0&usqp=CAU',
                    id:4,
                    productName:'nars highlihter',
                    price:'60dt',
                    
                },
                {   posterUrl:'https://images-na.ssl-images-amazon.com/images/I/81bukMjwsbL._AC_UL200_SR200,200_.jpg',
                                id:1,
                                productName:'elf eyeshadow',
                                price:'111dt',
                                
                            },
                           
                            {   posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7I7hq9l6zMwiRsB33LOQdyELeE1rRzcPEA&usqp=CAU',
                                id:3,
                                productName:'mac eyeshadow',
                                price:'180dt',
                                
                            },
                            {   posterUrl:'https://cdn.notinoimg.com/banner6/nars/607845011996_01/nars-voyageur-eyeshadow-palette-hibiscus-palett-for-ogonskugga_.jpg',
                                id:4,
                                productName:'nars eyeshadow',
                                price:'120dt',
                                
                            },
]

function ProductList() {
    return (
      <div className="product-list">
        {Prod.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    );
  }
  
  export default ProductList;