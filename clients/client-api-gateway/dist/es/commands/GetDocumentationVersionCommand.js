import { __extends } from "tslib";
import { DocumentationVersion, GetDocumentationVersionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetDocumentationVersionCommand,
  serializeAws_restJson1GetDocumentationVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetDocumentationVersionCommand = /** @class */ (function (_super) {
  __extends(GetDocumentationVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDocumentationVersionCommand(input) {
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
  GetDocumentationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetDocumentationVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDocumentationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationVersion.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDocumentationVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDocumentationVersionCommand(input, context);
  };
  GetDocumentationVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDocumentationVersionCommand(output, context);
  };
  return GetDocumentationVersionCommand;
})($Command);
export { GetDocumentationVersionCommand };
//# sourceMappingURL=GetDocumentationVersionCommand.js.map
