import { __extends } from "tslib";
import { ListObjectParentsRequest, ListObjectParentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListObjectParentsCommand,
  serializeAws_restJson1ListObjectParentsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists parent objects that are associated with a given object in pagination
 *       fashion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectParentsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectParentsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListObjectParentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectParentsCommandInput} for command's `input` shape.
 * @see {@link ListObjectParentsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListObjectParentsCommand = /** @class */ (function (_super) {
  __extends(ListObjectParentsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListObjectParentsCommand(input) {
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
  ListObjectParentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListObjectParentsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListObjectParentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectParentsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListObjectParentsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListObjectParentsCommand(input, context);
  };
  ListObjectParentsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListObjectParentsCommand(output, context);
  };
  return ListObjectParentsCommand;
})($Command);
export { ListObjectParentsCommand };
//# sourceMappingURL=ListObjectParentsCommand.js.map
