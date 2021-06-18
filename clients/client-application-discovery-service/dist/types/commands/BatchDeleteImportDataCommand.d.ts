import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { BatchDeleteImportDataRequest, BatchDeleteImportDataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchDeleteImportDataCommandInput extends BatchDeleteImportDataRequest {}
export interface BatchDeleteImportDataCommandOutput extends BatchDeleteImportDataResponse, __MetadataBearer {}
/**
 * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has
 *       a number of records that can identify servers or applications. </p>
 *
 *          <p>AWS Application Discovery Service has built-in matching logic that will identify when
 *       discovered servers match existing entries that you've previously discovered, the information
 *       for the already-existing discovered server is updated. When you delete an import task that
 *       contains records that were used to match, the information in those matched records that comes
 *       from the deleted records will also be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, BatchDeleteImportDataCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, BatchDeleteImportDataCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new BatchDeleteImportDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteImportDataCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImportDataCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteImportDataCommand extends $Command<
  BatchDeleteImportDataCommandInput,
  BatchDeleteImportDataCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  readonly input: BatchDeleteImportDataCommandInput;
  constructor(input: BatchDeleteImportDataCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteImportDataCommandInput, BatchDeleteImportDataCommandOutput>;
  private serialize;
  private deserialize;
}
