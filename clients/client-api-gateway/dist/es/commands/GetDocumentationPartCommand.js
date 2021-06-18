import { __extends } from "tslib";
import { DocumentationPart, GetDocumentationPartRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetDocumentationPartCommand,
  serializeAws_restJson1GetDocumentationPartCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetDocumentationPartCommand = /** @class */ (function (_super) {
  __extends(GetDocumentationPartCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDocumentationPartCommand(input) {
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
  GetDocumentationPartCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetDocumentationPartCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDocumentationPartRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationPart.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDocumentationPartCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDocumentationPartCommand(input, context);
  };
  GetDocumentationPartCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDocumentationPartCommand(output, context);
  };
  return GetDocumentationPartCommand;
})($Command);
export { GetDocumentationPartCommand };
//# sourceMappingURL=GetDocumentationPartCommand.js.map
