import { __extends } from "tslib";
import { DeleteDocumentationPartRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDocumentationPartCommand,
  serializeAws_restJson1DeleteDocumentationPartCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var DeleteDocumentationPartCommand = /** @class */ (function (_super) {
  __extends(DeleteDocumentationPartCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteDocumentationPartCommand(input) {
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
  DeleteDocumentationPartCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "DeleteDocumentationPartCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteDocumentationPartRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteDocumentationPartCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteDocumentationPartCommand(input, context);
  };
  DeleteDocumentationPartCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteDocumentationPartCommand(output, context);
  };
  return DeleteDocumentationPartCommand;
})($Command);
export { DeleteDocumentationPartCommand };
//# sourceMappingURL=DeleteDocumentationPartCommand.js.map
