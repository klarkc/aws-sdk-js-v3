import { __extends } from "tslib";
import { DescribeContinuousExportsRequest, DescribeContinuousExportsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeContinuousExportsCommand,
  serializeAws_json1_1DescribeContinuousExportsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists exports as specified by ID. All continuous exports associated with your user
 *       account can be listed if you call <code>DescribeContinuousExports</code> as is without passing
 *       any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeContinuousExportsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeContinuousExportsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeContinuousExportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContinuousExportsCommandInput} for command's `input` shape.
 * @see {@link DescribeContinuousExportsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeContinuousExportsCommand = /** @class */ (function (_super) {
  __extends(DescribeContinuousExportsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeContinuousExportsCommand(input) {
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
  DescribeContinuousExportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "DescribeContinuousExportsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeContinuousExportsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeContinuousExportsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeContinuousExportsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeContinuousExportsCommand(input, context);
  };
  DescribeContinuousExportsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeContinuousExportsCommand(output, context);
  };
  return DescribeContinuousExportsCommand;
})($Command);
export { DescribeContinuousExportsCommand };
//# sourceMappingURL=DescribeContinuousExportsCommand.js.map
