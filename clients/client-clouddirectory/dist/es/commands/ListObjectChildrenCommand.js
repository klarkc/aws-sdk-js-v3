import { __extends } from "tslib";
import { ListObjectChildrenRequest, ListObjectChildrenResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListObjectChildrenCommand,
  serializeAws_restJson1ListObjectChildrenCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListObjectChildrenCommand = /** @class */ (function (_super) {
  __extends(ListObjectChildrenCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListObjectChildrenCommand(input) {
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
  ListObjectChildrenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListObjectChildrenCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListObjectChildrenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectChildrenResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListObjectChildrenCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListObjectChildrenCommand(input, context);
  };
  ListObjectChildrenCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListObjectChildrenCommand(output, context);
  };
  return ListObjectChildrenCommand;
})($Command);
export { ListObjectChildrenCommand };
//# sourceMappingURL=ListObjectChildrenCommand.js.map
