import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { GetSchemaCreationStatusRequest, GetSchemaCreationStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetSchemaCreationStatusCommandInput extends GetSchemaCreationStatusRequest {}
export interface GetSchemaCreationStatusCommandOutput extends GetSchemaCreationStatusResponse, __MetadataBearer {}
/**
 * <p>Retrieves the current status of a schema creation operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetSchemaCreationStatusCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetSchemaCreationStatusCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetSchemaCreationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaCreationStatusCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSchemaCreationStatusCommand extends $Command<
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
  AppSyncClientResolvedConfig
> {
  readonly input: GetSchemaCreationStatusCommandInput;
  constructor(input: GetSchemaCreationStatusCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSchemaCreationStatusCommandInput, GetSchemaCreationStatusCommandOutput>;
  private serialize;
  private deserialize;
}
