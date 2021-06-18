import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { GetAppliedSchemaVersionRequest, GetAppliedSchemaVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetAppliedSchemaVersionCommandInput extends GetAppliedSchemaVersionRequest {}
export interface GetAppliedSchemaVersionCommandOutput extends GetAppliedSchemaVersionResponse, __MetadataBearer {}
/**
 * <p>Returns current applied schema version ARN, including the minor version in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetAppliedSchemaVersionCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetAppliedSchemaVersionCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetAppliedSchemaVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppliedSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link GetAppliedSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppliedSchemaVersionCommand extends $Command<
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: GetAppliedSchemaVersionCommandInput;
  constructor(input: GetAppliedSchemaVersionCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppliedSchemaVersionCommandInput, GetAppliedSchemaVersionCommandOutput>;
  private serialize;
  private deserialize;
}
