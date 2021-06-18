import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListAppliedSchemaArnsRequest, ListAppliedSchemaArnsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListAppliedSchemaArnsCommandInput extends ListAppliedSchemaArnsRequest {}
export interface ListAppliedSchemaArnsCommandOutput extends ListAppliedSchemaArnsResponse, __MetadataBearer {}
/**
 * <p>Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListAppliedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListAppliedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListAppliedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppliedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListAppliedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAppliedSchemaArnsCommand extends $Command<
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListAppliedSchemaArnsCommandInput;
  constructor(input: ListAppliedSchemaArnsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppliedSchemaArnsCommandInput, ListAppliedSchemaArnsCommandOutput>;
  private serialize;
  private deserialize;
}
