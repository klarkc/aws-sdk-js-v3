import { __extends } from "tslib";
import { DocumentationVersion, UpdateDocumentationVersionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDocumentationVersionCommand,
  serializeAws_restJson1UpdateDocumentationVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var UpdateDocumentationVersionCommand = /** @class */ (function (_super) {
  __extends(UpdateDocumentationVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateDocumentationVersionCommand(input) {
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
  UpdateDocumentationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateDocumentationVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateDocumentationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationVersion.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateDocumentationVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateDocumentationVersionCommand(input, context);
  };
  UpdateDocumentationVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateDocumentationVersionCommand(output, context);
  };
  return UpdateDocumentationVersionCommand;
})($Command);
export { UpdateDocumentationVersionCommand };
//# sourceMappingURL=UpdateDocumentationVersionCommand.js.map
