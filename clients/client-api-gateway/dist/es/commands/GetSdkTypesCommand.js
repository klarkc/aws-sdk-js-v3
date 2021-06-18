import { __extends } from "tslib";
import { GetSdkTypesRequest, SdkTypes } from "../models/models_0";
import {
  deserializeAws_restJson1GetSdkTypesCommand,
  serializeAws_restJson1GetSdkTypesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetSdkTypesCommand = /** @class */ (function (_super) {
  __extends(GetSdkTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSdkTypesCommand(input) {
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
  GetSdkTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetSdkTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSdkTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SdkTypes.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSdkTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSdkTypesCommand(input, context);
  };
  GetSdkTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSdkTypesCommand(output, context);
  };
  return GetSdkTypesCommand;
})($Command);
export { GetSdkTypesCommand };
//# sourceMappingURL=GetSdkTypesCommand.js.map
