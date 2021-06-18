import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { PutSchemaFromJsonRequest, PutSchemaFromJsonResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface PutSchemaFromJsonCommandInput extends PutSchemaFromJsonRequest {}
export interface PutSchemaFromJsonCommandOutput extends PutSchemaFromJsonResponse, __MetadataBearer {}
/**
 * <p>Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, PutSchemaFromJsonCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, PutSchemaFromJsonCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new PutSchemaFromJsonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSchemaFromJsonCommandInput} for command's `input` shape.
 * @see {@link PutSchemaFromJsonCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutSchemaFromJsonCommand extends $Command<
  PutSchemaFromJsonCommandInput,
  PutSchemaFromJsonCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: PutSchemaFromJsonCommandInput;
  constructor(input: PutSchemaFromJsonCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput>;
  private serialize;
  private deserialize;
}
