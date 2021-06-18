import { __extends } from "tslib";
import {
  PutAppInstanceStreamingConfigurationsRequest,
  PutAppInstanceStreamingConfigurationsResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand,
  serializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The data streaming configurations of an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAppInstanceStreamingConfigurationsCommand = /** @class */ (function (_super) {
  __extends(PutAppInstanceStreamingConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutAppInstanceStreamingConfigurationsCommand(input) {
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
  PutAppInstanceStreamingConfigurationsCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutAppInstanceStreamingConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutAppInstanceStreamingConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAppInstanceStreamingConfigurationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutAppInstanceStreamingConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand(input, context);
  };
  PutAppInstanceStreamingConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand(output, context);
  };
  return PutAppInstanceStreamingConfigurationsCommand;
})($Command);
export { PutAppInstanceStreamingConfigurationsCommand };
//# sourceMappingURL=PutAppInstanceStreamingConfigurationsCommand.js.map
