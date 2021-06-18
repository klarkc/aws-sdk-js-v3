import { __extends } from "tslib";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeClustersCommand,
  serializeAws_json1_1DescribeClustersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about AWS CloudHSM clusters.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the clusters. When the response contains only a subset of clusters, it includes
 *       a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code>
 *       request to get more clusters. When you receive a response with no <code>NextToken</code> (or
 *       an empty or null value), that means there are no more clusters to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DescribeClustersCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DescribeClustersCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClustersCommand = /** @class */ (function (_super) {
  __extends(DescribeClustersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeClustersCommand(input) {
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
  DescribeClustersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudHSMV2Client";
    var commandName = "DescribeClustersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeClustersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClustersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeClustersCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeClustersCommand(input, context);
  };
  DescribeClustersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeClustersCommand(output, context);
  };
  return DescribeClustersCommand;
})($Command);
export { DescribeClustersCommand };
//# sourceMappingURL=DescribeClustersCommand.js.map
