import { __extends } from "tslib";
import { ListObjectParentPathsRequest, ListObjectParentPathsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListObjectParentPathsCommand,
  serializeAws_restJson1ListObjectParentPathsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListObjectParentPathsCommand = /** @class */ (function (_super) {
  __extends(ListObjectParentPathsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListObjectParentPathsCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  ListObjectParentPathsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListObjectParentPathsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListObjectParentPathsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectParentPathsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListObjectParentPathsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListObjectParentPathsCommand(input, context);
  };
  ListObjectParentPathsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListObjectParentPathsCommand(output, context);
  };
  return ListObjectParentPathsCommand;
})($Command);
export { ListObjectParentPathsCommand };
//# sourceMappingURL=ListObjectParentPathsCommand.js.map
