{-# LANGUAGE FlexibleContexts #-}
module Main where

import Compiler.Pipeline
import Generic.Prelude
import qualified Prelude as P

jsSumList :: (NumC j, ListC j, Eq j Num, BoolC j, FunC j, MaybeC j) => j (Num -> Num)
jsSumList = lam (\x -> sum (replicate 3 (2 * 8) ++ replicate 3 8) * maybe 4 (*8) (just (x - 2)))

main :: P.IO ()
main =
  do out <- compiler jsSumList
     P.putStrLn (out P.++ ";alert(__main(3));")

