import { __extends } from "tslib";
import { PutAccountConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_json1_1PutAccountConfigurationCommand,
  serializeAws_json1_1PutAccountConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or modifies
 *       account-level configurations in ACM.
 *       </p>
 *          <p>The
 *       supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the
 *       number of days prior to certificate expiration when ACM starts generating
 *         <code>EventBridge</code> events. ACM sends one event per day per certificate until the
 *       certificate expires. By default, accounts receive events starting 45 days before certificate
 *       expiration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, PutAccountConfigurationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, PutAccountConfigurationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new PutAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAccountConfigurationCommand = /** @class */ (function (_super) {
  __extends(PutAccountConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutAccountConfigurationCommand(input) {
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
  PutAccountConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMClient";
    var commandName = "PutAccountConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutAccountConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutAccountConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1PutAccountConfigurationCommand(input, context);
  };
  PutAccountConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1PutAccountConfigurationCommand(output, context);
  };
  return PutAccountConfigurationCommand;
})($Command);
export { PutAccountConfigurationCommand };
//# sourceMappingURL=PutAccountConfigurationCommand.js.map
