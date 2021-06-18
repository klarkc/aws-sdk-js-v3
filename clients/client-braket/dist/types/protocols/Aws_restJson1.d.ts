import { CancelQuantumTaskCommandInput, CancelQuantumTaskCommandOutput } from "../commands/CancelQuantumTaskCommand";
import { CreateQuantumTaskCommandInput, CreateQuantumTaskCommandOutput } from "../commands/CreateQuantumTaskCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "../commands/GetDeviceCommand";
import { GetQuantumTaskCommandInput, GetQuantumTaskCommandOutput } from "../commands/GetQuantumTaskCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { SearchDevicesCommandInput, SearchDevicesCommandOutput } from "../commands/SearchDevicesCommand";
import { SearchQuantumTasksCommandInput, SearchQuantumTasksCommandOutput } from "../commands/SearchQuantumTasksCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CancelQuantumTaskCommand: (
  input: CancelQuantumTaskCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateQuantumTaskCommand: (
  input: CreateQuantumTaskCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDeviceCommand: (
  input: GetDeviceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetQuantumTaskCommand: (
  input: GetQuantumTaskCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SearchDevicesCommand: (
  input: SearchDevicesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SearchQuantumTasksCommand: (
  input: SearchQuantumTasksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CancelQuantumTaskCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CancelQuantumTaskCommandOutput>;
export declare const deserializeAws_restJson1CreateQuantumTaskCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateQuantumTaskCommandOutput>;
export declare const deserializeAws_restJson1GetDeviceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDeviceCommandOutput>;
export declare const deserializeAws_restJson1GetQuantumTaskCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetQuantumTaskCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1SearchDevicesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchDevicesCommandOutput>;
export declare const deserializeAws_restJson1SearchQuantumTasksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SearchQuantumTasksCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
