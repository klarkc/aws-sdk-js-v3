import { __extends } from "tslib";
import { DescribeFleetsRequest, DescribeFleetsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetsCommand,
  serializeAws_json1_1DescribeFleetsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeFleetsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeFleetsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DescribeFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetsCommand = /** @class */ (function (_super) {
  __extends(DescribeFleetsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeFleetsCommand(input) {
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
  DescribeFleetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DescribeFleetsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeFleetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeFleetsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeFleetsCommand(input, context);
  };
  DescribeFleetsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeFleetsCommand(output, context);
  };
  return DescribeFleetsCommand;
})($Command);
export { DescribeFleetsCommand };
//# sourceMappingURL=DescribeFleetsCommand.js.map
