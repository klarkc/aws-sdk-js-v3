import {
  DeleteReportDefinitionCommandInput,
  DeleteReportDefinitionCommandOutput,
} from "../commands/DeleteReportDefinitionCommand";
import {
  GetReportDefinitionCommandInput,
  GetReportDefinitionCommandOutput,
} from "../commands/GetReportDefinitionCommand";
import {
  ImportApplicationUsageCommandInput,
  ImportApplicationUsageCommandOutput,
} from "../commands/ImportApplicationUsageCommand";
import {
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput,
} from "../commands/ListReportDefinitionsCommand";
import {
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput,
} from "../commands/PutReportDefinitionCommand";
import {
  UpdateReportDefinitionCommandInput,
  UpdateReportDefinitionCommandOutput,
} from "../commands/UpdateReportDefinitionCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1DeleteReportDefinitionCommand: (
  input: DeleteReportDefinitionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetReportDefinitionCommand: (
  input: GetReportDefinitionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ImportApplicationUsageCommand: (
  input: ImportApplicationUsageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListReportDefinitionsCommand: (
  input: ListReportDefinitionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutReportDefinitionCommand: (
  input: PutReportDefinitionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateReportDefinitionCommand: (
  input: UpdateReportDefinitionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1DeleteReportDefinitionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteReportDefinitionCommandOutput>;
export declare const deserializeAws_restJson1GetReportDefinitionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetReportDefinitionCommandOutput>;
export declare const deserializeAws_restJson1ImportApplicationUsageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ImportApplicationUsageCommandOutput>;
export declare const deserializeAws_restJson1ListReportDefinitionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListReportDefinitionsCommandOutput>;
export declare const deserializeAws_restJson1PutReportDefinitionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutReportDefinitionCommandOutput>;
export declare const deserializeAws_restJson1UpdateReportDefinitionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateReportDefinitionCommandOutput>;
