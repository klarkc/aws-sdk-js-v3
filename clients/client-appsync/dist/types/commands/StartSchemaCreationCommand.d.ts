import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { StartSchemaCreationRequest, StartSchemaCreationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface StartSchemaCreationCommandInput extends StartSchemaCreationRequest {}
export interface StartSchemaCreationCommandOutput extends StartSchemaCreationResponse, __MetadataBearer {}
/**
 * <p>Adds a new schema to your GraphQL API.</p>
 *          <p>This operation is asynchronous. Use  to
 *          determine when it has completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartSchemaCreationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, StartSchemaCreationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new StartSchemaCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSchemaCreationCommandInput} for command's `input` shape.
 * @see {@link StartSchemaCreationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSchemaCreationCommand extends $Command<
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
  AppSyncClientResolvedConfig
> {
  readonly input: StartSchemaCreationCommandInput;
  constructor(input: StartSchemaCreationCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSchemaCreationCommandInput, StartSchemaCreationCommandOutput>;
  private serialize;
  private deserialize;
}
