import { __extends } from "tslib";
import { DocumentationPart, UpdateDocumentationPartRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDocumentationPartCommand,
  serializeAws_restJson1UpdateDocumentationPartCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var UpdateDocumentationPartCommand = /** @class */ (function (_super) {
  __extends(UpdateDocumentationPartCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateDocumentationPartCommand(input) {
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
  UpdateDocumentationPartCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateDocumentationPartCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateDocumentationPartRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationPart.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateDocumentationPartCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateDocumentationPartCommand(input, context);
  };
  UpdateDocumentationPartCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateDocumentationPartCommand(output, context);
  };
  return UpdateDocumentationPartCommand;
})($Command);
export { UpdateDocumentationPartCommand };
//# sourceMappingURL=UpdateDocumentationPartCommand.js.map
