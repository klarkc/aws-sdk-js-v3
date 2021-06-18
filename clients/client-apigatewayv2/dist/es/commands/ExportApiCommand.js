import { __extends } from "tslib";
import { ExportApiRequest, ExportApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ExportApiCommand,
  serializeAws_restJson1ExportApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ExportApiCommand = /** @class */ (function (_super) {
  __extends(ExportApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ExportApiCommand(input) {
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
  ExportApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "ExportApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ExportApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ExportApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ExportApiCommand(input, context);
  };
  ExportApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ExportApiCommand(output, context);
  };
  return ExportApiCommand;
})($Command);
export { ExportApiCommand };
//# sourceMappingURL=ExportApiCommand.js.map
