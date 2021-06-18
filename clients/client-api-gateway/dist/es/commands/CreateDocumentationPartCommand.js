import { __extends } from "tslib";
import { CreateDocumentationPartRequest, DocumentationPart } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDocumentationPartCommand,
  serializeAws_restJson1CreateDocumentationPartCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var CreateDocumentationPartCommand = /** @class */ (function (_super) {
  __extends(CreateDocumentationPartCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDocumentationPartCommand(input) {
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
  CreateDocumentationPartCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "CreateDocumentationPartCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDocumentationPartRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationPart.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDocumentationPartCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateDocumentationPartCommand(input, context);
  };
  CreateDocumentationPartCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateDocumentationPartCommand(output, context);
  };
  return CreateDocumentationPartCommand;
})($Command);
export { CreateDocumentationPartCommand };
//# sourceMappingURL=CreateDocumentationPartCommand.js.map
