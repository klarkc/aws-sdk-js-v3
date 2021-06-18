import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListDevelopmentSchemaArnsRequest, ListDevelopmentSchemaArnsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListDevelopmentSchemaArnsCommandInput extends ListDevelopmentSchemaArnsRequest {}
export interface ListDevelopmentSchemaArnsCommandOutput extends ListDevelopmentSchemaArnsResponse, __MetadataBearer {}
/**
 * <p>Retrieves each Amazon Resource Name (ARN) of schemas in the development
 *       state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListDevelopmentSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListDevelopmentSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListDevelopmentSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevelopmentSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListDevelopmentSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDevelopmentSchemaArnsCommand extends $Command<
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListDevelopmentSchemaArnsCommandInput;
  constructor(input: ListDevelopmentSchemaArnsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDevelopmentSchemaArnsCommandInput, ListDevelopmentSchemaArnsCommandOutput>;
  private serialize;
  private deserialize;
}
