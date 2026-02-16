  // app/join/page.tsx                                                                                           
   "use client";                                                                                                  
                                                                                                                  
   import Link from "next/link";                                                                                  
   import { useState } from "react";                                                                              
                                                                                                                  
   export default function JoinPage() {                                                                           
     const [pin, setPin] = useState("");                                                                          
                                                                                                                  
     const handleSubmit = (event: React.FormEvent) => {                                                           
       event.preventDefault();                                                                                    
       // For now, just show an alert. Later, we’ll use this PIN to join a real game.                             
       alert(`Trying to join game with PIN: ${pin}`);                                                             
     };                                                                                                           
                                                                                                                  
     return (                                                                                                     
       <main className="min-h-screen bg-slate-950 text-white flex flex-col">                                      
         <header className="px-6 py-4 border-b border-white/10 flex items-center justify-between">                
           <Link href="/" className="text-sm text-white/70 hover:text-white">                                     
             ← Back to Faraway                                                                                    
           </Link>                                                                                                
           <span className="text-xs uppercase tracking-[0.3em] text-white/50">                                    
             Player                                                                                               
           </span>                                                                                                
         </header>                                                                                                
                                                                                                                  
         <section className="flex-1 flex items-center justify-center px-4">                                       
           <form                                                                                                  
             onSubmit={handleSubmit}                                                                              
             className="w-full max-w-md bg-slate-900/70 border border-white/10 rounded-3xl p-8 shadow-xl"         
           >                                                                                                      
             <h1 className="text-2xl font-semibold mb-2">Join a Game</h1>                                         
             <p className="text-sm text-white/70 mb-6">                                                           
               Ask your host for the game PIN and enter it below.                                                 
             </p>                                                                                                 
                                                                                                                  
             <label className="block text-left text-xs font-medium text-white/60 mb-1">                           
               Game PIN                                                                                           
             </label>                                                                                             
             <input                                                                                               
               type="text"                                                                                        
               value={pin}                                                                                        
               onChange={(e) => setPin(e.target.value)}                                                           
               maxLength={8}                                                                                      
               className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-white/20 text-white              
 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"                                                      
               placeholder="e.g. 483912"                                                                          
             />                                                                                                   
                                                                                                                  
             <button                                                                                              
               type="submit"                                                                                      
               className="w-full py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold      
 transition"                                                                                                      
             >                                                                                                    
               Join Game                                                                                          
             </button>                                                                                            
                                                                                                                  
             <p className="mt-3 text-xs text-white/50">                                                           
               Later, this will connect to a real game session via Supabase.                                      
             </p>                                                                                                 
           </form>                                                                                                
         </section>                                                                                               
       </main>                                                                                                    
     );                                                                                                           
   }                         