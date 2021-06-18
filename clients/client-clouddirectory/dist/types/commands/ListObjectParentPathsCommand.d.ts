import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListObjectParentPathsRequest, ListObjectParentPathsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListObjectParentPathsCommandInput extends ListObjectParentPathsRequest {}
export interface ListObjectParentPathsCommandOutput extends ListObjectParentPathsResponse, __MetadataBearer {}
/**
 * <p>Retrieves all available parent paths for any object type such as node, leaf node,
 *       policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
 *          <p>Use this API to evaluate all parents for an object. The call returns all objects from
 *       the root of the directory up to the requested object. The API returns the number of paths
 *       based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent.
 *       The order of the paths and nodes returned is consistent among multiple API calls unless the
 *       objects are deleted or moved. Paths not leading to the directory root are ignored from the
 *       target object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectParentPathsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectParentPathsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListObjectParentPathsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectParentPathsCommandInput} for command's `input` shape.
 * @see {@link ListObjectParentPathsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListObjectParentPathsCommand extends $Command<
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  readonly input: ListObjectParentPathsCommandInput;
  constructor(input: ListObjectParentPathsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListObjectParentPathsCommandInput, ListObjectParentPathsCommandOutput>;
  private serialize;
  private deserialize;
}
