import { CloneBackendCommandInput, CloneBackendCommandOutput } from "../commands/CloneBackendCommand";
import { CreateBackendAPICommandInput, CreateBackendAPICommandOutput } from "../commands/CreateBackendAPICommand";
import { CreateBackendAuthCommandInput, CreateBackendAuthCommandOutput } from "../commands/CreateBackendAuthCommand";
import { CreateBackendCommandInput, CreateBackendCommandOutput } from "../commands/CreateBackendCommand";
import {
  CreateBackendConfigCommandInput,
  CreateBackendConfigCommandOutput,
} from "../commands/CreateBackendConfigCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "../commands/CreateTokenCommand";
import { DeleteBackendAPICommandInput, DeleteBackendAPICommandOutput } from "../commands/DeleteBackendAPICommand";
import { DeleteBackendAuthCommandInput, DeleteBackendAuthCommandOutput } from "../commands/DeleteBackendAuthCommand";
import { DeleteBackendCommandInput, DeleteBackendCommandOutput } from "../commands/DeleteBackendCommand";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "../commands/DeleteTokenCommand";
import {
  GenerateBackendAPIModelsCommandInput,
  GenerateBackendAPIModelsCommandOutput,
} from "../commands/GenerateBackendAPIModelsCommand";
import { GetBackendAPICommandInput, GetBackendAPICommandOutput } from "../commands/GetBackendAPICommand";
import {
  GetBackendAPIModelsCommandInput,
  GetBackendAPIModelsCommandOutput,
} from "../commands/GetBackendAPIModelsCommand";
import { GetBackendAuthCommandInput, GetBackendAuthCommandOutput } from "../commands/GetBackendAuthCommand";
import { GetBackendCommandInput, GetBackendCommandOutput } from "../commands/GetBackendCommand";
import { GetBackendJobCommandInput, GetBackendJobCommandOutput } from "../commands/GetBackendJobCommand";
import { GetTokenCommandInput, GetTokenCommandOutput } from "../commands/GetTokenCommand";
import { ListBackendJobsCommandInput, ListBackendJobsCommandOutput } from "../commands/ListBackendJobsCommand";
import { RemoveAllBackendsCommandInput, RemoveAllBackendsCommandOutput } from "../commands/RemoveAllBackendsCommand";
import {
  RemoveBackendConfigCommandInput,
  RemoveBackendConfigCommandOutput,
} from "../commands/RemoveBackendConfigCommand";
import { UpdateBackendAPICommandInput, UpdateBackendAPICommandOutput } from "../commands/UpdateBackendAPICommand";
import { UpdateBackendAuthCommandInput, UpdateBackendAuthCommandOutput } from "../commands/UpdateBackendAuthCommand";
import {
  UpdateBackendConfigCommandInput,
  UpdateBackendConfigCommandOutput,
} from "../commands/UpdateBackendConfigCommand";
import { UpdateBackendJobCommandInput, UpdateBackendJobCommandOutput } from "../commands/UpdateBackendJobCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CloneBackendCommand: (
  input: CloneBackendCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateBackendCommand: (
  input: CreateBackendCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateBackendAPICommand: (
  input: CreateBackendAPICommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateBackendAuthCommand: (
  input: CreateBackendAuthCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateBackendConfigCommand: (
  input: CreateBackendConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateTokenCommand: (
  input: CreateTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackendCommand: (
  input: DeleteBackendCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackendAPICommand: (
  input: DeleteBackendAPICommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackendAuthCommand: (
  input: DeleteBackendAuthCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteTokenCommand: (
  input: DeleteTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GenerateBackendAPIModelsCommand: (
  input: GenerateBackendAPIModelsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackendCommand: (
  input: GetBackendCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackendAPICommand: (
  input: GetBackendAPICommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackendAPIModelsCommand: (
  input: GetBackendAPIModelsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackendAuthCommand: (
  input: GetBackendAuthCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackendJobCommand: (
  input: GetBackendJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetTokenCommand: (
  input: GetTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBackendJobsCommand: (
  input: ListBackendJobsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RemoveAllBackendsCommand: (
  input: RemoveAllBackendsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RemoveBackendConfigCommand: (
  input: RemoveBackendConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateBackendAPICommand: (
  input: UpdateBackendAPICommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateBackendAuthCommand: (
  input: UpdateBackendAuthCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateBackendConfigCommand: (
  input: UpdateBackendConfigCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateBackendJobCommand: (
  input: UpdateBackendJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CloneBackendCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CloneBackendCommandOutput>;
export declare const deserializeAws_restJson1CreateBackendCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBackendCommandOutput>;
export declare const deserializeAws_restJson1CreateBackendAPICommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBackendAPICommandOutput>;
export declare const deserializeAws_restJson1CreateBackendAuthCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBackendAuthCommandOutput>;
export declare const deserializeAws_restJson1CreateBackendConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBackendConfigCommandOutput>;
export declare const deserializeAws_restJson1CreateTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTokenCommandOutput>;
export declare const deserializeAws_restJson1DeleteBackendCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackendCommandOutput>;
export declare const deserializeAws_restJson1DeleteBackendAPICommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackendAPICommandOutput>;
export declare const deserializeAws_restJson1DeleteBackendAuthCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackendAuthCommandOutput>;
export declare const deserializeAws_restJson1DeleteTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteTokenCommandOutput>;
export declare const deserializeAws_restJson1GenerateBackendAPIModelsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GenerateBackendAPIModelsCommandOutput>;
export declare const deserializeAws_restJson1GetBackendCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackendCommandOutput>;
export declare const deserializeAws_restJson1GetBackendAPICommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackendAPICommandOutput>;
export declare const deserializeAws_restJson1GetBackendAPIModelsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackendAPIModelsCommandOutput>;
export declare const deserializeAws_restJson1GetBackendAuthCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackendAuthCommandOutput>;
export declare const deserializeAws_restJson1GetBackendJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackendJobCommandOutput>;
export declare const deserializeAws_restJson1GetTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTokenCommandOutput>;
export declare const deserializeAws_restJson1ListBackendJobsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBackendJobsCommandOutput>;
export declare const deserializeAws_restJson1RemoveAllBackendsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RemoveAllBackendsCommandOutput>;
export declare const deserializeAws_restJson1RemoveBackendConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RemoveBackendConfigCommandOutput>;
export declare const deserializeAws_restJson1UpdateBackendAPICommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBackendAPICommandOutput>;
export declare const deserializeAws_restJson1UpdateBackendAuthCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBackendAuthCommandOutput>;
export declare const deserializeAws_restJson1UpdateBackendConfigCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBackendConfigCommandOutput>;
export declare const deserializeAws_restJson1UpdateBackendJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBackendJobCommandOutput>;
