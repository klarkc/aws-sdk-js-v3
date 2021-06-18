import { __extends } from "tslib";
import { DeleteDocumentationVersionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDocumentationVersionCommand,
  serializeAws_restJson1DeleteDocumentationVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var DeleteDocumentationVersionCommand = /** @class */ (function (_super) {
  __extends(DeleteDocumentationVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteDocumentationVersionCommand(input) {
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
  DeleteDocumentationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteDocumentationVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteDocumentationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteDocumentationVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteDocumentationVersionCommand(input, context);
  };
  DeleteDocumentationVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteDocumentationVersionCommand(output, context);
  };
  return DeleteDocumentationVersionCommand;
})($Command);
export { DeleteDocumentationVersionCommand };
//# sourceMappingURL=DeleteDocumentationVersionCommand.js.map
