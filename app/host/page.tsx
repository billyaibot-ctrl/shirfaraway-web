 // app/host/page.tsx                                                                                           
   import Link from "next/link";                                                                                  
                                                                                                                  
   export default function HostPage() {                                                                           
     return (                                                                                                     
       <main className="min-h-screen bg-slate-950 text-white flex flex-col">                                      
         <header className="px-6 py-4 border-b border-white/10 flex items-center justify-between">                
           <Link href="/" className="text-sm text-white/70 hover:text-white">                                     
             ← Back to Faraway                                                                                    
           </Link>                                                                                                
           <span className="text-xs uppercase tracking-[0.3em] text-white/50">                                    
             Host                                                                                                 
           </span>                                                                                                
         </header>                                                                                                
                                                                                                                  
         <section className="flex-1 flex items-center justify-center px-4">                                       
           <div className="w-full max-w-lg bg-slate-900/70 border border-white/10 rounded-3xl p-8 shadow-xl">     
             <h1 className="text-2xl font-semibold mb-2">Host a Game</h1>                                         
             <p className="text-sm text-white/70 mb-6">                                                           
               This is where you&apos;ll create a quiz, get a game PIN, and control                               
               the flow of the game. For now, it&apos;s just a placeholder screen.                                
             </p>                                                                                                 
                                                                                                                  
             <div className="space-y-4">                                                                          
               <button                                                                                            
                 disabled                                                                                         
                 className="w-full py-3 rounded-2xl bg-slate-700 text-white/60 font-semibold cursor-not-allowed"  
               >                                                                                                  
                 Create new quiz (coming soon)                                                                    
               </button>                                                                                          
                                                                                                                  
               <p className="text-xs text-white/50">                                                              
                 Billy’s AI will help you add real game creation, questions, and                                  
                 live control here.                                                                               
               </p>                                                                                               
             </div>                                                                                               
           </div>                                                                                                 
         </section>                                                                                               
       </main>                                                                                                    
     );                                                                                                           
   }                                                 