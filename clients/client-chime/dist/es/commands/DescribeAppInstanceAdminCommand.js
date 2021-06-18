import { __extends } from "tslib";
import { DescribeAppInstanceAdminRequest, DescribeAppInstanceAdminResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppInstanceAdminCommand,
  serializeAws_restJson1DescribeAppInstanceAdminCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the full details of an <code>AppInstanceAdmin</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeAppInstanceAdminCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeAppInstanceAdminCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAppInstanceAdminCommand = /** @class */ (function (_super) {
  __extends(DescribeAppInstanceAdminCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAppInstanceAdminCommand(input) {
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
  DescribeAppInstanceAdminCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DescribeAppInstanceAdminCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeAppInstanceAdminRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAppInstanceAdminResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAppInstanceAdminCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeAppInstanceAdminCommand(input, context);
  };
  DescribeAppInstanceAdminCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeAppInstanceAdminCommand(output, context);
  };
  return DescribeAppInstanceAdminCommand;
})($Command);
export { DescribeAppInstanceAdminCommand };
//# sourceMappingURL=DescribeAppInstanceAdminCommand.js.map
