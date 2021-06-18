import {
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
} from "../commands/CreateEventIntegrationCommand";
import {
  DeleteEventIntegrationCommandInput,
  DeleteEventIntegrationCommandOutput,
} from "../commands/DeleteEventIntegrationCommand";
import {
  GetEventIntegrationCommandInput,
  GetEventIntegrationCommandOutput,
} from "../commands/GetEventIntegrationCommand";
import {
  ListEventIntegrationAssociationsCommandInput,
  ListEventIntegrationAssociationsCommandOutput,
} from "../commands/ListEventIntegrationAssociationsCommand";
import {
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput,
} from "../commands/ListEventIntegrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateEventIntegrationCommandInput,
  UpdateEventIntegrationCommandOutput,
} from "../commands/UpdateEventIntegrationCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateEventIntegrationCommand: (
  input: CreateEventIntegrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteEventIntegrationCommand: (
  input: DeleteEventIntegrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetEventIntegrationCommand: (
  input: GetEventIntegrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListEventIntegrationAssociationsCommand: (
  input: ListEventIntegrationAssociationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListEventIntegrationsCommand: (
  input: ListEventIntegrationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
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
export declare const serializeAws_restJson1UpdateEventIntegrationCommand: (
  input: UpdateEventIntegrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateEventIntegrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateEventIntegrationCommandOutput>;
export declare const deserializeAws_restJson1DeleteEventIntegrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteEventIntegrationCommandOutput>;
export declare const deserializeAws_restJson1GetEventIntegrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetEventIntegrationCommandOutput>;
export declare const deserializeAws_restJson1ListEventIntegrationAssociationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListEventIntegrationAssociationsCommandOutput>;
export declare const deserializeAws_restJson1ListEventIntegrationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListEventIntegrationsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateEventIntegrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateEventIntegrationCommandOutput>;
