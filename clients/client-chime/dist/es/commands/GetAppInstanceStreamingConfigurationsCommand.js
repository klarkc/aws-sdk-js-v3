import { __extends } from "tslib";
import {
  GetAppInstanceStreamingConfigurationsRequest,
  GetAppInstanceStreamingConfigurationsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand,
  serializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the streaming settings for an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppInstanceStreamingConfigurationsCommand = /** @class */ (function (_super) {
  __extends(GetAppInstanceStreamingConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAppInstanceStreamingConfigurationsCommand(input) {
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
  GetAppInstanceStreamingConfigurationsCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetAppInstanceStreamingConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAppInstanceStreamingConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAppInstanceStreamingConfigurationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAppInstanceStreamingConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand(input, context);
  };
  GetAppInstanceStreamingConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand(output, context);
  };
  return GetAppInstanceStreamingConfigurationsCommand;
})($Command);
export { GetAppInstanceStreamingConfigurationsCommand };
//# sourceMappingURL=GetAppInstanceStreamingConfigurationsCommand.js.map
