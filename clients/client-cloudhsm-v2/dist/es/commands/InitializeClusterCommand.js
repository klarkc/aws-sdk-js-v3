import { __extends } from "tslib";
import { InitializeClusterRequest, InitializeClusterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1InitializeClusterCommand,
  serializeAws_json1_1InitializeClusterCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your
 *       issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
 *       cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
 *       To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, InitializeClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, InitializeClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new InitializeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitializeClusterCommandInput} for command's `input` shape.
 * @see {@link InitializeClusterCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InitializeClusterCommand = /** @class */ (function (_super) {
  __extends(InitializeClusterCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function InitializeClusterCommand(input) {
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
  InitializeClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudHSMV2Client";
    var commandName = "InitializeClusterCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: InitializeClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InitializeClusterResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  InitializeClusterCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1InitializeClusterCommand(input, context);
  };
  InitializeClusterCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1InitializeClusterCommand(output, context);
  };
  return InitializeClusterCommand;
})($Command);
export { InitializeClusterCommand };
//# sourceMappingURL=InitializeClusterCommand.js.map
