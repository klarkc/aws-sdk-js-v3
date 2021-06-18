import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListObjectChildrenRequest, ListObjectChildrenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListObjectChildrenCommandInput extends ListObjectChildrenRequest {}
export interface ListObjectChildrenCommandOutput extends ListObjectChildrenResponse, __MetadataBearer {}
/**
 * <p>Returns a paginated list of child objects that are associated with a given
 *       object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectChildrenCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectChildrenCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListObjectChildrenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectChildrenCommandInput} for command's `input` shape.
 * @see {@link ListObjectChildrenCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListObjectChildrenCommand extends $Command<
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListObjectChildrenCommandInput;
  constructor(input: ListObjectChildrenCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput>;
  private serialize;
  private deserialize;
}
