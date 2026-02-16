 // app/page.tsx                                                                                                
   import Link from "next/link";                                                                                  
                                                                                                                  
   export default function HomePage() {                                                                           
     return (                                                                                                     
       <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex            
 items-center justify-center px-4">                                                                               
         <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border           
 border-white/20 text-center">                                                                                    
           <div className="mb-6">                                                                                 
             <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">                                
               Shir&apos;s Faraway                                                                                
             </p>                                                                                                 
             <h1 className="text-3xl font-bold text-white mb-2">                                                  
               Welcome to Faraway                                                                                 
             </h1>                                                                                                
             <p className="text-sm text-white/80">                                                                
               A playful, Kahoot-style quiz experience. Host games, join from your                                
               phone, compete with friends.                                                                       
             </p>                                                                                                 
           </div>                                                                                                 
                                                                                                                  
           <div className="space-y-4">                                                                            
             <Link                                                                                                
               href="/host"                                                                                       
               className="block w-full py-3 rounded-2xl bg-white text-indigo-700 font-semibold shadow-lg          
 hover:shadow-xl hover:bg-indigo-50 transition"                                                                   
             >                                                                                                    
               Host a Game                                                                                        
             </Link>                                                                                              
                                                                                                                  
             <Link                                                                                                
               href="/join"                                                                                       
               className="block w-full py-3 rounded-2xl bg-indigo-900/80 text-white font-semibold border          
 border-white/30 hover:bg-indigo-900 transition"                                                                  
             >                                                                                                    
               Join a Game                                                                                        
             </Link>                                                                                              
           </div>                                                                                                 
                                                                                                                  
           <p className="mt-6 text-xs text-white/70">                                                             
             Billy’s AI will help you build this into a full real-time game.                                      
           </p>                                                                                                   
         </div>                                                                                                   
       </main>                                                                                                    
     );                                                                                                           
   }                      