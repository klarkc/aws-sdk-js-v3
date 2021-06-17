import { GetPersonalizedRankingCommandInput, GetPersonalizedRankingCommandOutput } from "../commands/GetPersonalizedRankingCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1GetPersonalizedRankingCommand: (input: GetPersonalizedRankingCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetRecommendationsCommand: (input: GetRecommendationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1GetPersonalizedRankingCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetPersonalizedRankingCommandOutput>;
export declare const deserializeAws_restJson1GetRecommendationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetRecommendationsCommandOutput>;
