import { __extends } from "tslib";
import { CreateDocumentationVersionRequest, DocumentationVersion } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDocumentationVersionCommand,
  serializeAws_restJson1CreateDocumentationVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var CreateDocumentationVersionCommand = /** @class */ (function (_super) {
  __extends(CreateDocumentationVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDocumentationVersionCommand(input) {
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
  CreateDocumentationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "CreateDocumentationVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDocumentationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationVersion.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDocumentationVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateDocumentationVersionCommand(input, context);
  };
  CreateDocumentationVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateDocumentationVersionCommand(output, context);
  };
  return CreateDocumentationVersionCommand;
})($Command);
export { CreateDocumentationVersionCommand };
//# sourceMappingURL=CreateDocumentationVersionCommand.js.map
