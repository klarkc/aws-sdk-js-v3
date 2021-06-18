import { __extends } from "tslib";
import { DocumentationVersions, GetDocumentationVersionsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetDocumentationVersionsCommand,
  serializeAws_restJson1GetDocumentationVersionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetDocumentationVersionsCommand = /** @class */ (function (_super) {
  __extends(GetDocumentationVersionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDocumentationVersionsCommand(input) {
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
  GetDocumentationVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetDocumentationVersionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDocumentationVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationVersions.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDocumentationVersionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDocumentationVersionsCommand(input, context);
  };
  GetDocumentationVersionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDocumentationVersionsCommand(output, context);
  };
  return GetDocumentationVersionsCommand;
})($Command);
export { GetDocumentationVersionsCommand };
//# sourceMappingURL=GetDocumentationVersionsCommand.js.map
