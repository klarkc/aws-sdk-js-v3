import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { PostToConnectionCommandInput, PostToConnectionCommandOutput } from "../commands/PostToConnectionCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1DeleteConnectionCommand: (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetConnectionCommand: (
  input: GetConnectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PostToConnectionCommand: (
  input: PostToConnectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1DeleteConnectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteConnectionCommandOutput>;
export declare const deserializeAws_restJson1GetConnectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetConnectionCommandOutput>;
export declare const deserializeAws_restJson1PostToConnectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PostToConnectionCommandOutput>;
