import { __extends } from "tslib";
import { ExpireSessionRequest, ExpireSessionResult } from "../models/models_0";
import {
  deserializeAws_json1_1ExpireSessionCommand,
  serializeAws_json1_1ExpireSessionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Immediately stops the specified streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ExpireSessionCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ExpireSessionCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new ExpireSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExpireSessionCommandInput} for command's `input` shape.
 * @see {@link ExpireSessionCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExpireSessionCommand = /** @class */ (function (_super) {
  __extends(ExpireSessionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ExpireSessionCommand(input) {
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
  ExpireSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "ExpireSessionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ExpireSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExpireSessionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ExpireSessionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ExpireSessionCommand(input, context);
  };
  ExpireSessionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ExpireSessionCommand(output, context);
  };
  return ExpireSessionCommand;
})($Command);
export { ExpireSessionCommand };
//# sourceMappingURL=ExpireSessionCommand.js.map
