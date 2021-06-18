import { __extends } from "tslib";
import { DocumentationPartIds, ImportDocumentationPartsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ImportDocumentationPartsCommand,
  serializeAws_restJson1ImportDocumentationPartsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ImportDocumentationPartsCommand = /** @class */ (function (_super) {
  __extends(ImportDocumentationPartsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ImportDocumentationPartsCommand(input) {
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
  ImportDocumentationPartsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "ImportDocumentationPartsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ImportDocumentationPartsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DocumentationPartIds.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ImportDocumentationPartsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ImportDocumentationPartsCommand(input, context);
  };
  ImportDocumentationPartsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ImportDocumentationPartsCommand(output, context);
  };
  return ImportDocumentationPartsCommand;
})($Command);
export { ImportDocumentationPartsCommand };
//# sourceMappingURL=ImportDocumentationPartsCommand.js.map
